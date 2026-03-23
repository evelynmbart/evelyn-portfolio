/**
 * CodeObjectInspector Type Definitions
 * 
 * This module defines the core data structures for representing
 * JavaScript objects as a structured, inspectable token tree.
 */

// =============================================================================
// CORE VALUE TYPES
// =============================================================================

/**
 * Supported primitive and complex types that the inspector can render.
 * These map to JavaScript's runtime types with additional granularity.
 */
export type TokenValueType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'null'
  | 'undefined'
  | 'array'
  | 'object'
  | 'function'
  | 'symbol'
  | 'bigint'
  | 'date';

// =============================================================================
// TOKEN NODE STRUCTURE
// =============================================================================

/**
 * Represents a single node in the parsed object tree.
 * Each node contains metadata for rendering and interaction.
 */
export interface TokenNode {
  /** Unique identifier for this node, used for focus management and keys */
  id: string;
  
  /** Property key (null for root or array indices displayed as numbers) */
  key: string | number | null;
  
  /** The actual value stored at this node */
  value: unknown;
  
  /** Classified type of the value for syntax highlighting */
  type: TokenValueType;
  
  /** Whether this node can be expanded (true for objects and arrays) */
  expandable: boolean;
  
  /** Current expansion state */
  expanded: boolean;
  
  /** Depth level in the tree (0 = root) */
  depth: number;
  
  /** Child nodes for objects and arrays */
  children: TokenNode[];
  
  /** Parent node reference (null for root) */
  parentId: string | null;
  
  /** Path from root to this node (e.g., "user.profile.name") */
  path: string;
  
  /** Start line number in the rendered output (1-indexed) */
  startLine: number;
  
  /** End line number in the rendered output (1-indexed) */
  endLine: number;
  
  /** Number of items for arrays, properties for objects */
  childCount: number;
}

// =============================================================================
// PARSED TREE STRUCTURE
// =============================================================================

/**
 * The complete parsed representation of an object.
 * Contains the root node and metadata about the tree.
 */
export interface ParsedObjectTree {
  /** Root node of the tree */
  root: TokenNode;
  
  /** Flat map of all nodes by ID for quick lookup */
  nodeMap: Map<string, TokenNode>;
  
  /** Total line count for the gutter */
  totalLines: number;
  
  /** Ordered list of focusable node IDs for keyboard navigation */
  focusableIds: string[];
}

// =============================================================================
// INTERACTION STATE
// =============================================================================

/**
 * Represents the current interaction state of the inspector.
 */
export interface InspectorState {
  /** Currently hovered node ID (null if none) */
  hoveredId: string | null;
  
  /** Currently focused node ID for keyboard navigation */
  focusedId: string | null;
  
  /** Set of expanded node IDs */
  expandedIds: Set<string>;
  
  /** Whether the component has keyboard focus */
  hasFocus: boolean;
}

// =============================================================================
// COMPONENT PROPS
// =============================================================================

/**
 * Configuration for making values clickable links.
 */
export interface LinkConfig {
  /** Map of value strings to their destination URLs */
  valueLinks?: Record<string, string>;
  
  /** Field names whose values should be rendered as mailto: links */
  emailFields?: string[];
}

/**
 * Props for the CodeObjectInspector component.
 */
export interface CodeObjectInspectorProps {
  /** The object to inspect and render */
  data: unknown;
  
  /** Variable name to display (e.g., "const myData = ") */
  variableName?: string;
  
  /** Initial expansion depth (-1 = all collapsed, 0 = root expanded, etc.) */
  initialExpandDepth?: number;
  
  /** Maximum depth to allow expansion */
  maxDepth?: number;
  
  /** Custom class name for styling overrides */
  className?: string;
  
  /** Callback when a node is clicked */
  onNodeClick?: (node: TokenNode) => void;
  
  /** Callback when expansion state changes */
  onExpansionChange?: (expandedIds: Set<string>) => void;
  
  /** Whether to show line numbers */
  showLineNumbers?: boolean;
  
  /** Custom color theme overrides */
  theme?: Partial<InspectorTheme>;
  
  /** Configuration for making values clickable links */
  linkConfig?: LinkConfig;
}

// =============================================================================
// THEMING
// =============================================================================

/**
 * Color theme for the inspector.
 * Matches the existing portfolio color scheme.
 */
export interface InspectorTheme {
  /** Background color of the inspector */
  background: string;
  
  /** Gutter background color */
  gutterBackground: string;
  
  /** Line number color */
  lineNumber: string;
  
  /** Highlighted line number color */
  lineNumberHighlight: string;
  
  /** Property key color */
  key: string;
  
  /** String value color */
  string: string;
  
  /** Number value color */
  number: string;
  
  /** Boolean value color */
  boolean: string;
  
  /** Null/undefined color */
  nullish: string;
  
  /** Bracket and punctuation color */
  punctuation: string;
  
  /** Keyword color (const, let) */
  keyword: string;
  
  /** Hover/focus highlight background */
  highlightBackground: string;
  
  /** Hover/focus highlight border */
  highlightBorder: string;
}

/**
 * Default theme matching the portfolio's pastel aesthetic
 */
export const defaultTheme: InspectorTheme = {
  background: 'rgba(40, 35, 45, 0.95)',
  gutterBackground: 'rgba(30, 26, 33, 0.8)',
  lineNumber: 'rgba(255, 255, 255, 0.3)',
  lineNumberHighlight: 'var(--pastel-blue)',
  key: 'var(--pastel-pink)',
  string: 'var(--pastel-orange)',
  number: 'var(--pastel-green)',
  boolean: 'var(--pastel-purple)',
  nullish: 'rgba(255, 255, 255, 0.5)',
  punctuation: 'rgba(255, 255, 255, 0.8)',
  keyword: 'var(--pastel-purple)',
  highlightBackground: 'rgba(168, 200, 232, 0.08)',
  highlightBorder: 'rgba(168, 200, 232, 0.2)',
};

// =============================================================================
// ACCESSIBILITY
// =============================================================================

/**
 * Screen reader announcement types
 */
export type AnnouncementType = 'expansion' | 'collapse' | 'focus' | 'navigation';

/**
 * Screen reader announcement data
 */
export interface Announcement {
  type: AnnouncementType;
  message: string;
  priority: 'polite' | 'assertive';
}

// =============================================================================
// ANIMATION CONFIGURATION
// =============================================================================

/**
 * Animation timing configuration
 */
export interface AnimationConfig {
  /** Hover fade duration in seconds */
  hoverDuration: number;
  
  /** Expansion animation duration in seconds */
  expansionDuration: number;
  
  /** Stagger delay between children in seconds */
  staggerDelay: number;
  
  /** Spring stiffness for layout animations */
  springStiffness: number;
  
  /** Spring damping for layout animations */
  springDamping: number;
}

/**
 * Default animation configuration
 */
export const defaultAnimationConfig: AnimationConfig = {
  hoverDuration: 0.15, // 150ms - within the 120-180ms range
  expansionDuration: 0.25,
  staggerDelay: 0.03,
  springStiffness: 300,
  springDamping: 30,
};
