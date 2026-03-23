/**
 * CodeObjectInspector Component
 *
 * A React component that renders JavaScript objects as syntax-highlighted,
 * interactive IDE-style code with full keyboard navigation and accessibility.
 *
 * Architecture:
 * - Parser (parser.ts): Converts objects to token trees
 * - Hooks (hooks.ts): State management and interactions
 * - Renderer (this file): Visual presentation and animations
 */

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useCallback, useMemo } from "react";
import "./CodeObjectInspector.css";
import {
  useAnnouncements,
  useHoverTracking,
  useInspectorState,
  useKeyboardNavigation,
  useLineNumbers,
} from "./hooks";
import {
  formatCollapsedArray,
  formatCollapsedObject,
  formatPrimitiveValue,
  getValueType,
} from "./parser";
import type {
  AnimationConfig,
  CodeObjectInspectorProps,
  InspectorTheme,
  LinkConfig,
  TokenNode,
} from "./types";
import { defaultAnimationConfig, defaultTheme } from "./types";

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

/**
 * Animation variants for node fade-in effects
 */
const nodeVariants = {
  hidden: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.15 },
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * defaultAnimationConfig.staggerDelay,
      duration: 0.2,
      ease: "easeOut" as const,
    },
  }),
  exit: {
    opacity: 0,
    x: -4,
    transition: { duration: 0.12 },
  },
};

/**
 * Animation variants for highlight effects
 */
const highlightVariants = {
  inactive: {
    opacity: 0,
    transition: { duration: defaultAnimationConfig.hoverDuration },
  },
  active: {
    opacity: 1,
    transition: { duration: defaultAnimationConfig.hoverDuration },
  },
};

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

/**
 * Line Gutter Component
 * Renders line numbers with hover highlighting
 */
interface LineGutterProps {
  totalLines: number;
  highlightedLines: Set<number>;
  theme: InspectorTheme;
}

const LineGutter: React.FC<LineGutterProps> = React.memo(
  ({ totalLines, highlightedLines, theme }) => {
    return (
      <motion.div
        className="coi-gutter"
        layout
        transition={{
          duration: defaultAnimationConfig.expansionDuration,
          ease: "easeInOut",
        }}
      >
        {Array.from({ length: totalLines }, (_, i) => {
          const lineNum = i + 1;
          const isHighlighted = highlightedLines.has(lineNum);

          return (
            <motion.div
              key={lineNum}
              className={`coi-line-number ${isHighlighted ? "highlighted" : ""}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              <motion.span
                animate={{
                  color: isHighlighted
                    ? theme.lineNumberHighlight
                    : theme.lineNumber,
                }}
                transition={{ duration: defaultAnimationConfig.hoverDuration }}
              >
                {lineNum}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    );
  },
);

LineGutter.displayName = "LineGutter";

/**
 * Token Value Renderer
 * Renders individual values with appropriate syntax coloring
 */
interface TokenValueProps {
  node: TokenNode;
  isExpanded: boolean;
  linkConfig?: LinkConfig;
  parentKey?: string | number | null;
}

const TokenValue: React.FC<TokenValueProps> = React.memo(
  ({ node, isExpanded, linkConfig, parentKey }) => {
    const { type, value } = node;

    // Helper to check if a string value should be a link
    const getLink = (
      val: string,
    ): { href: string; isEmail: boolean; download?: boolean | string } | null => {
      if (!linkConfig) return null;

      const keyToCheck = typeof node.key === "string" ? node.key : parentKey;

      // Check if this is an email field (check node.key for direct fields like "email")
      if (linkConfig.emailFields) {
        if (typeof keyToCheck === "string" && linkConfig.emailFields.includes(keyToCheck)) {
          return { href: `mailto:${val}`, isEmail: true };
        }
      }

      // Check if this field has a direct link mapping (by field name, not value)
      if (typeof keyToCheck === "string" && linkConfig.fieldLinks?.[keyToCheck]) {
        const fieldCfg = linkConfig.fieldLinks[keyToCheck];
        if (typeof fieldCfg === "string") {
          return { href: fieldCfg, isEmail: false };
        }
        return { href: fieldCfg.href, isEmail: false, download: fieldCfg.download };
      }

      // Check if this value has a direct link mapping
      if (linkConfig.valueLinks && linkConfig.valueLinks[val]) {
        return { href: linkConfig.valueLinks[val], isEmail: false };
      }

      return null;
    };

    // Handle collapsed expandable types
    if (node.expandable && !isExpanded) {
      if (type === "array") {
        return (
          <span className="coi-value coi-collapsed">
            {formatCollapsedArray(value as unknown[])}
          </span>
        );
      }
      if (type === "object") {
        return (
          <span className="coi-value coi-collapsed">
            {formatCollapsedObject(value as Record<string, unknown>)}
          </span>
        );
      }
    }

    // Handle expanded opening bracket
    if (node.expandable && isExpanded) {
      return (
        <span className="coi-bracket">{type === "array" ? "[" : "{"}</span>
      );
    }

    // Handle non-expandable arrays (small arrays stay inline)
    if (type === "array" && !node.expandable) {
      const arr = value as unknown[];
      const items = arr.map((item, idx) => {
        const itemType = getValueType(item);
        const formattedValue = formatPrimitiveValue(item, itemType);

        // Check if this array item should be a link
        if (typeof item === "string") {
          const linkInfo = getLink(item);
          if (linkInfo) {
            return (
              <React.Fragment key={idx}>
                {idx > 0 && ", "}
                <a
                  className={["coi-value", "coi-string", "coi-link"].join(" ")}
                  href={linkInfo.href}
                  download={
                    typeof linkInfo.download === "string"
                      ? linkInfo.download
                      : linkInfo.download
                        ? true
                        : undefined
                  }
                  target={linkInfo.isEmail || linkInfo.download ? undefined : "_blank"}
                  rel={
                    linkInfo.isEmail || linkInfo.download
                      ? undefined
                      : "noopener noreferrer"
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  {formattedValue}
                </a>
              </React.Fragment>
            );
          }
        }
        return (
          <React.Fragment key={idx}>
            {idx > 0 && ", "}
            <span className={`coi-value coi-${itemType}`}>
              {formattedValue}
            </span>
          </React.Fragment>
        );
      });
      return (
        <span className="coi-value coi-array-inline">
          <span className="coi-bracket">[</span>
          {items}
          <span className="coi-bracket">]</span>
        </span>
      );
    }

    // Check if this string value should be a link
    if (type === "string" && typeof value === "string") {
      const linkInfo = getLink(value);
      if (linkInfo) {
        return (
          <a
            className="coi-value coi-string coi-link"
            href={linkInfo.href}
            download={
              typeof linkInfo.download === "string"
                ? linkInfo.download
                : linkInfo.download
                  ? true
                  : undefined
            }
            target={linkInfo.isEmail || linkInfo.download ? undefined : "_blank"}
            rel={
              linkInfo.isEmail || linkInfo.download ? undefined : "noopener noreferrer"
            }
            onClick={(e) => e.stopPropagation()}
          >
            {formatPrimitiveValue(value, type)}
          </a>
        );
      }
    }

    // Render primitive values with appropriate styling
    const valueClass = `coi-value coi-${type}`;

    return (
      <span className={valueClass}>{formatPrimitiveValue(value, type)}</span>
    );
  },
);

TokenValue.displayName = "TokenValue";

/**
 * Expand/Collapse Toggle Button
 */
interface ExpandToggleProps {
  isExpanded: boolean;
  onClick: () => void;
  nodeKey: string | number | null;
}

const ExpandToggle: React.FC<ExpandToggleProps> = React.memo(
  ({ isExpanded, onClick, nodeKey }) => {
    return (
      <motion.button
        className="coi-expand-toggle"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${nodeKey ?? "object"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.15 }}
        >
          ▸
        </motion.span>
      </motion.button>
    );
  },
);

ExpandToggle.displayName = "ExpandToggle";

/**
 * Single Token Node Renderer
 * Renders a single node with its key, value, and interaction states
 */
interface TokenNodeRendererProps {
  node: TokenNode;
  isExpanded: boolean;
  isHovered: boolean;
  isFocused: boolean;
  onToggleExpansion: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  animationConfig: AnimationConfig;
  index: number;
  showComma: boolean;
  linkConfig?: LinkConfig;
  parentKey?: string | number | null;
}

const TokenNodeRenderer: React.FC<TokenNodeRendererProps> = React.memo(
  ({
    node,
    isExpanded,
    isHovered,
    isFocused,
    onToggleExpansion,
    onMouseEnter,
    onMouseLeave,
    onClick,
    index,
    showComma,
    linkConfig,
    parentKey,
  }) => {
    const isHighlighted = isHovered || isFocused;
    const indent = node.depth * 24; // 24px per level

    return (
      <motion.div
        className={`coi-node ${isHighlighted ? "highlighted" : ""}`}
        data-node-id={node.id}
        role="treeitem"
        aria-expanded={node.expandable ? isExpanded : undefined}
        aria-level={node.depth + 1}
        tabIndex={isFocused ? 0 : -1}
        style={{ paddingLeft: indent }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        variants={nodeVariants}
        custom={index}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
      >
        {/* Highlight background */}
        <motion.div
          className="coi-highlight-bg"
          variants={highlightVariants}
          initial="inactive"
          animate={isHighlighted ? "active" : "inactive"}
        />

        {/* Expand toggle for expandable nodes */}
        {node.expandable && (
          <ExpandToggle
            isExpanded={isExpanded}
            onClick={onToggleExpansion}
            nodeKey={node.key}
          />
        )}

        {/* Spacer for non-expandable nodes */}
        {!node.expandable && <span className="coi-toggle-spacer" />}

        {/* Property key (if not array index or root) */}
        {node.key !== null && typeof node.key === "string" && (
          <>
            <span className="coi-key">{node.key}</span>
            <span className="coi-punctuation">: </span>
          </>
        )}

        {/* Value */}
        <TokenValue
          node={node}
          isExpanded={isExpanded}
          linkConfig={linkConfig}
          parentKey={parentKey}
        />

        {/* Trailing comma and child count */}
        {showComma && !isExpanded && <span className="coi-punctuation">,</span>}

        {/* Child count badge for collapsed nodes */}
        {node.expandable && !isExpanded && node.childCount > 0 && (
          <span className="coi-child-count">
            // {node.childCount} {node.type === "array" ? "items" : "keys"}
          </span>
        )}
      </motion.div>
    );
  },
);

TokenNodeRenderer.displayName = "TokenNodeRenderer";

/**
 * Closing Bracket Renderer
 */
interface ClosingBracketProps {
  node: TokenNode;
  depth: number;
  showComma: boolean;
}

const ClosingBracket: React.FC<ClosingBracketProps> = React.memo(
  ({ node, depth, showComma }) => {
    const indent = depth * 24;

    return (
      <motion.div
        className="coi-closing-bracket"
        style={{ paddingLeft: indent }}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <span className="coi-toggle-spacer" />
        <span className="coi-bracket">{node.type === "array" ? "]" : "}"}</span>
        {showComma && <span className="coi-punctuation">,</span>}
      </motion.div>
    );
  },
);

ClosingBracket.displayName = "ClosingBracket";

/**
 * Recursive Tree Renderer
 * Renders the complete token tree with animations
 */
interface TreeRendererProps {
  node: TokenNode;
  expandedIds: Set<string>;
  hoveredId: string | null;
  focusedId: string | null;
  onToggleExpansion: (id: string) => void;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  onNodeClick: (node: TokenNode) => void;
  animationConfig: AnimationConfig;
  isLast: boolean;
  globalIndex: { current: number };
  linkConfig?: LinkConfig;
  parentKey?: string | number | null;
}

const TreeRenderer: React.FC<TreeRendererProps> = ({
  node,
  expandedIds,
  hoveredId,
  focusedId,
  onToggleExpansion,
  onMouseEnter,
  onMouseLeave,
  onNodeClick,
  animationConfig,
  isLast,
  globalIndex,
  linkConfig,
  parentKey,
}) => {
  const isExpanded = expandedIds.has(node.id);
  const isHovered = hoveredId === node.id;
  const isFocused = focusedId === node.id;
  const currentIndex = globalIndex.current++;

  return (
    <>
      <TokenNodeRenderer
        node={node}
        isExpanded={isExpanded}
        isHovered={isHovered}
        isFocused={isFocused}
        onToggleExpansion={() => onToggleExpansion(node.id)}
        onMouseEnter={() => onMouseEnter(node.id)}
        onMouseLeave={onMouseLeave}
        onClick={() => onNodeClick(node)}
        animationConfig={animationConfig}
        index={currentIndex}
        showComma={!isLast && !isExpanded}
        linkConfig={linkConfig}
        parentKey={parentKey}
      />

      {/* Render children if expanded */}
      <AnimatePresence mode="sync">
        {isExpanded && node.children.length > 0 && (
          <motion.div
            className="coi-children"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: animationConfig.expansionDuration,
              ease: "easeInOut",
            }}
          >
            {node.children.map((child, idx) => (
              <TreeRenderer
                key={child.id}
                node={child}
                expandedIds={expandedIds}
                hoveredId={hoveredId}
                focusedId={focusedId}
                onToggleExpansion={onToggleExpansion}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onNodeClick={onNodeClick}
                animationConfig={animationConfig}
                isLast={idx === node.children.length - 1}
                globalIndex={globalIndex}
                linkConfig={linkConfig}
                parentKey={node.key}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closing bracket for expanded nodes */}
      <AnimatePresence>
        {isExpanded && node.expandable && (
          <ClosingBracket node={node} depth={node.depth} showComma={!isLast} />
        )}
      </AnimatePresence>
    </>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

/**
 * CodeObjectInspector
 *
 * Renders a JavaScript object as syntax-highlighted, interactive IDE-style code.
 *
 * Features:
 * - Recursive token tree parsing
 * - Syntax highlighting with customizable themes
 * - Expandable/collapsible objects and arrays
 * - Smooth animations with Framer Motion
 * - Full keyboard navigation (arrow keys, Enter, Tab)
 * - Screen reader support with ARIA attributes
 * - Hover introspection with line highlighting
 *
 * @example
 * ```tsx
 * <CodeObjectInspector
 *   data={{ name: "John", age: 30, hobbies: ["reading", "coding"] }}
 *   variableName="user"
 *   initialExpandDepth={2}
 * />
 * ```
 */
export const CodeObjectInspector: React.FC<CodeObjectInspectorProps> = ({
  data,
  variableName = "data",
  initialExpandDepth = 1,
  className = "",
  onNodeClick,
  onExpansionChange,
  showLineNumbers = true,
  theme: themeOverrides,
  linkConfig,
}) => {
  // Merge theme with defaults
  const theme = useMemo(
    () => ({
      ...defaultTheme,
      ...themeOverrides,
    }),
    [themeOverrides],
  );

  // Initialize inspector state
  const {
    parsedTree,
    expandedIds,
    visibleNodeIds,
    totalLines,
    setHoveredId,
    setFocusedId,
    setHasFocus,
    toggleExpansion,
    getNode,
    state,
  } = useInspectorState(data, initialExpandDepth);

  // Screen reader announcements
  const { announcement, announce } = useAnnouncements();

  // Keyboard navigation
  const { containerRef, handleKeyDown } = useKeyboardNavigation(
    visibleNodeIds,
    state.focusedId,
    setFocusedId,
    toggleExpansion,
    getNode,
    announce,
  );

  // Hover tracking
  const { handleMouseEnter, handleMouseLeave } = useHoverTracking(setHoveredId);

  // Line number highlighting
  const lineNumbers = useLineNumbers(parsedTree.root, expandedIds);

  // Calculate highlighted lines based on hover/focus
  // +1 offset accounts for the declaration line at the top
  const highlightedLines = useMemo(() => {
    const lines = new Set<number>();
    const activeId = state.hoveredId || state.focusedId;

    if (activeId) {
      const nodeLines = lineNumbers.get(activeId);
      if (nodeLines) {
        for (let i = nodeLines.start; i <= nodeLines.end; i++) {
          lines.add(i + 1); // +1 for declaration line offset
        }
      }
    }

    return lines;
  }, [state.hoveredId, state.focusedId, lineNumbers]);

  // Handle node click
  const handleNodeClick = useCallback(
    (node: TokenNode) => {
      setFocusedId(node.id);

      if (node.expandable) {
        toggleExpansion(node.id);

        announce({
          type: expandedIds.has(node.id) ? "collapse" : "expansion",
          message: `${String(node.key ?? "root")} ${expandedIds.has(node.id) ? "collapsed" : "expanded"}`,
          priority: "polite",
        });
      }

      onNodeClick?.(node);
    },
    [setFocusedId, toggleExpansion, expandedIds, announce, onNodeClick],
  );

  // Notify parent of expansion changes
  React.useEffect(() => {
    onExpansionChange?.(expandedIds);
  }, [expandedIds, onExpansionChange]);

  // Handle focus events
  const handleFocus = useCallback(() => {
    setHasFocus(true);
    if (!state.focusedId && visibleNodeIds.length > 0) {
      setFocusedId(visibleNodeIds[0]);
    }
  }, [setHasFocus, state.focusedId, visibleNodeIds, setFocusedId]);

  const handleBlur = useCallback(() => {
    setHasFocus(false);
  }, [setHasFocus]);

  // Global index for stagger animations
  const globalIndex = { current: 0 };

  return (
    <LayoutGroup>
      <div
        ref={containerRef}
        className={`coi-container ${className}`}
        role="tree"
        aria-label={`Object inspector for ${variableName}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={
          {
            "--coi-bg": theme.background,
            "--coi-gutter-bg": theme.gutterBackground,
            "--coi-line-number": theme.lineNumber,
            "--coi-line-number-highlight": theme.lineNumberHighlight,
            "--coi-key": theme.key,
            "--coi-string": theme.string,
            "--coi-number": theme.number,
            "--coi-boolean": theme.boolean,
            "--coi-nullish": theme.nullish,
            "--coi-punctuation": theme.punctuation,
            "--coi-keyword": theme.keyword,
            "--coi-highlight-bg": theme.highlightBackground,
            "--coi-highlight-border": theme.highlightBorder,
          } as React.CSSProperties
        }
      >
        {/* Line number gutter */}
        {/* +2 accounts for declaration line and semicolon line */}
        {showLineNumbers && (
          <LineGutter
            totalLines={totalLines + 2}
            highlightedLines={highlightedLines}
            theme={theme}
          />
        )}

        {/* Code content area */}
        <motion.div className="coi-content" layout>
          {/* Variable declaration */}
          <div className="coi-declaration">
            <span className="coi-keyword">const </span>
            <span className="coi-variable">{variableName}</span>
            <span className="coi-punctuation"> = </span>
          </div>

          {/* Token tree */}
          <div className="coi-tree">
            <TreeRenderer
              node={parsedTree.root}
              expandedIds={expandedIds}
              hoveredId={state.hoveredId}
              focusedId={state.focusedId}
              onToggleExpansion={toggleExpansion}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onNodeClick={handleNodeClick}
              animationConfig={defaultAnimationConfig}
              isLast={true}
              globalIndex={globalIndex}
              linkConfig={linkConfig}
              parentKey={null}
            />
          </div>

          {/* Semicolon */}
          <div className="coi-semicolon">
            <span className="coi-punctuation">;</span>
          </div>
        </motion.div>

        {/* Screen reader announcements (visually hidden) */}
        <div
          role="status"
          aria-live={announcement?.priority || "polite"}
          aria-atomic="true"
          className="coi-sr-only"
        >
          {announcement?.message}
        </div>
      </div>
    </LayoutGroup>
  );
};

// Default export
export default CodeObjectInspector;
