/**
 * Object Parser Module
 * 
 * Converts JavaScript objects into a structured token tree
 * suitable for rendering with syntax highlighting and interactivity.
 */

import type { TokenNode, TokenValueType, ParsedObjectTree } from './types';

// =============================================================================
// TYPE DETECTION
// =============================================================================

/**
 * Determines the TokenValueType for a given JavaScript value.
 * Handles edge cases like null, Date objects, and symbols.
 */
export function getValueType(value: unknown): TokenValueType {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  
  const jsType = typeof value;
  
  switch (jsType) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'function':
      return 'function';
    case 'symbol':
      return 'symbol';
    case 'bigint':
      return 'bigint';
    case 'object':
      // Check for Date objects
      if (value instanceof Date) return 'date';
      // Check for arrays
      if (Array.isArray(value)) return 'array';
      // Default to object
      return 'object';
    default:
      return 'object';
  }
}

/**
 * Checks if a type is expandable (can contain children)
 */
export function isExpandableType(type: TokenValueType): boolean {
  return type === 'object' || type === 'array';
}

// =============================================================================
// ID GENERATION
// =============================================================================

let nodeIdCounter = 0;

/**
 * Generates a unique ID for a node.
 * Uses a combination of path and counter for uniqueness.
 */
function generateNodeId(path: string): string {
  return `node-${path.replace(/[.\[\]]/g, '-')}-${++nodeIdCounter}`;
}

/**
 * Resets the ID counter (useful for testing or re-parsing)
 */
export function resetIdCounter(): void {
  nodeIdCounter = 0;
}

// =============================================================================
// TREE PARSING
// =============================================================================

/**
 * Context passed through the recursive parsing process
 */
interface ParsingContext {
  nodeMap: Map<string, TokenNode>;
  focusableIds: string[];
  currentLine: number;
  expandedIds: Set<string>;
  initialExpandDepth: number;
}

/**
 * Recursively parses a value into a TokenNode tree.
 * 
 * @param value - The value to parse
 * @param key - The property key (null for root)
 * @param depth - Current depth in the tree
 * @param parentId - Parent node ID
 * @param path - Path from root to this node
 * @param context - Parsing context with shared state
 * @returns The parsed TokenNode
 */
/**
 * Checks if an array should be kept inline (not expandable).
 * Arrays with 3 or fewer primitive items stay inline.
 */
function shouldKeepArrayInline(arr: unknown[]): boolean {
  if (arr.length > 3) return false;
  
  // Check if all items are primitives (not objects or arrays)
  return arr.every(item => {
    const itemType = getValueType(item);
    return itemType !== 'object' && itemType !== 'array';
  });
}

function parseValue(
  value: unknown,
  key: string | number | null,
  depth: number,
  parentId: string | null,
  path: string,
  context: ParsingContext
): TokenNode {
  const type = getValueType(value);
  const id = generateNodeId(path);
  
  // Determine if this node is expandable
  // Arrays with 3 or fewer primitive items are NOT expandable
  let expandable = isExpandableType(type);
  if (type === 'array' && expandable) {
    const arr = value as unknown[];
    if (shouldKeepArrayInline(arr)) {
      expandable = false;
    }
  }
  
  // Determine initial expansion state based on depth
  const shouldExpand = expandable && depth < context.initialExpandDepth;
  if (shouldExpand) {
    context.expandedIds.add(id);
  }
  
  // Create the node (we'll update line numbers later)
  const node: TokenNode = {
    id,
    key,
    value,
    type,
    expandable,
    expanded: shouldExpand,
    depth,
    children: [],
    parentId,
    path,
    startLine: 0,
    endLine: 0,
    childCount: 0,
  };
  
  // Parse children for expandable types
  if (expandable && value !== null) {
    if (type === 'array') {
      const arr = value as unknown[];
      node.childCount = arr.length;
      node.children = arr.map((item, index) =>
        parseValue(
          item,
          index,
          depth + 1,
          id,
          `${path}[${index}]`,
          context
        )
      );
    } else if (type === 'object') {
      const obj = value as Record<string, unknown>;
      const entries = Object.entries(obj);
      node.childCount = entries.length;
      node.children = entries.map(([k, v]) =>
        parseValue(
          v,
          k,
          depth + 1,
          id,
          path ? `${path}.${k}` : k,
          context
        )
      );
    }
  }
  
  // Register the node
  context.nodeMap.set(id, node);
  context.focusableIds.push(id);
  
  return node;
}

/**
 * Assigns line numbers to all nodes in the tree based on expansion state.
 * Must be called after parsing and whenever expansion state changes.
 */
export function assignLineNumbers(
  node: TokenNode,
  startLine: number,
  expandedIds: Set<string>
): number {
  node.startLine = startLine;
  
  if (!node.expandable || !expandedIds.has(node.id)) {
    // Non-expanded nodes take exactly 1 line
    node.endLine = startLine;
    return startLine + 1;
  }
  
  // Expanded nodes: account for children
  let currentLine = startLine + 1; // After opening brace
  
  for (const child of node.children) {
    currentLine = assignLineNumbers(child, currentLine, expandedIds);
  }
  
  node.endLine = currentLine; // Closing brace line
  return currentLine + 1;
}

/**
 * Recalculates line numbers for the entire tree.
 * Call this after any expansion state change.
 */
export function recalculateLineNumbers(
  root: TokenNode,
  expandedIds: Set<string>
): number {
  return assignLineNumbers(root, 1, expandedIds);
}

/**
 * Gets a flattened list of visible node IDs in render order.
 * Only includes nodes that are currently visible based on expansion state.
 */
export function getVisibleNodeIds(
  node: TokenNode,
  expandedIds: Set<string>,
  result: string[] = []
): string[] {
  result.push(node.id);
  
  // Only include children if this node is expanded
  if (node.expandable && expandedIds.has(node.id)) {
    for (const child of node.children) {
      getVisibleNodeIds(child, expandedIds, result);
    }
  }
  
  return result;
}

// =============================================================================
// MAIN PARSE FUNCTION
// =============================================================================

/**
 * Parses a JavaScript object into a complete ParsedObjectTree.
 * This is the main entry point for the parser module.
 * 
 * @param data - The object to parse
 * @param initialExpandDepth - How many levels to expand by default (0 = collapsed)
 * @returns The complete parsed tree with metadata
 * 
 * @example
 * ```ts
 * const tree = parseObject({ name: "John", age: 30 }, 1);
 * // tree.root contains the token tree
 * // tree.nodeMap provides quick ID lookup
 * // tree.totalLines indicates gutter line count
 * ```
 */
export function parseObject(
  data: unknown,
  initialExpandDepth: number = 1
): ParsedObjectTree {
  // Reset the counter for a fresh parse
  resetIdCounter();
  
  const expandedIds = new Set<string>();
  
  const context: ParsingContext = {
    nodeMap: new Map(),
    focusableIds: [],
    currentLine: 1,
    expandedIds,
    initialExpandDepth,
  };
  
  // Parse the root value
  const root = parseValue(data, null, 0, null, 'root', context);
  
  // Assign line numbers based on initial expansion state
  const totalLines = assignLineNumbers(root, 1, expandedIds);
  
  return {
    root,
    nodeMap: context.nodeMap,
    totalLines: totalLines - 1, // -1 because assignLineNumbers returns next line
    focusableIds: getVisibleNodeIds(root, expandedIds),
  };
}

// =============================================================================
// VALUE FORMATTING
// =============================================================================

/**
 * Formats a primitive value for display.
 * Strings get quotes, numbers and booleans are displayed as-is.
 */
export function formatPrimitiveValue(value: unknown, type: TokenValueType): string {
  switch (type) {
    case 'string':
      return `"${String(value)}"`;
    case 'number':
    case 'bigint':
      return String(value);
    case 'boolean':
      return value ? 'true' : 'false';
    case 'null':
      return 'null';
    case 'undefined':
      return 'undefined';
    case 'function':
      return '[Function]';
    case 'symbol':
      return String(value);
    case 'date':
      return `Date("${(value as Date).toISOString()}")`;
    default:
      return String(value);
  }
}

/**
 * Formats a collapsed array for inline display.
 * Shows first few items with ellipsis if needed.
 */
export function formatCollapsedArray(value: unknown[], maxItems: number = 3): string {
  if (value.length === 0) return '[]';
  
  const preview = value.slice(0, maxItems).map(item => {
    const type = getValueType(item);
    if (type === 'array') return '[...]';
    if (type === 'object') return '{...}';
    return formatPrimitiveValue(item, type);
  });
  
  const suffix = value.length > maxItems ? ', ...' : '';
  return `[${preview.join(', ')}${suffix}]`;
}

/**
 * Formats a collapsed object for inline display.
 * Shows first few keys with ellipsis if needed.
 */
export function formatCollapsedObject(
  value: Record<string, unknown>,
  maxKeys: number = 2
): string {
  const keys = Object.keys(value);
  if (keys.length === 0) return '{}';
  
  const preview = keys.slice(0, maxKeys).map(key => {
    const val = value[key];
    const type = getValueType(val);
    if (type === 'array') return `${key}: [...]`;
    if (type === 'object') return `${key}: {...}`;
    return `${key}: ${formatPrimitiveValue(val, type)}`;
  });
  
  const suffix = keys.length > maxKeys ? ', ...' : '';
  return `{ ${preview.join(', ')}${suffix} }`;
}
