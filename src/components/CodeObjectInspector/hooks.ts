/**
 * Custom Hooks for CodeObjectInspector
 * 
 * Handles state management, keyboard navigation, and accessibility.
 */

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import type { 
  TokenNode, 
  InspectorState, 
  ParsedObjectTree,
  Announcement 
} from './types';
import { 
  parseObject, 
  recalculateLineNumbers, 
  getVisibleNodeIds 
} from './parser';

// =============================================================================
// INSPECTOR STATE HOOK
// =============================================================================

/**
 * Manages the core state of the inspector including expansion,
 * hover, and focus states.
 */
export function useInspectorState(
  data: unknown,
  initialExpandDepth: number = 1
) {
  // Parse the object into a tree
  const [parsedTree, setParsedTree] = useState<ParsedObjectTree>(() => 
    parseObject(data, initialExpandDepth)
  );
  
  // Track expanded node IDs
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const ids = new Set<string>();
    // Collect initially expanded IDs from parsed tree
    const collectExpanded = (node: TokenNode) => {
      if (node.expanded) ids.add(node.id);
      node.children.forEach(collectExpanded);
    };
    collectExpanded(parsedTree.root);
    return ids;
  });
  
  // Interaction state
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [hasFocus, setHasFocus] = useState(false);
  
  // Calculate visible nodes based on expansion state
  const visibleNodeIds = useMemo(() => 
    getVisibleNodeIds(parsedTree.root, expandedIds),
    [parsedTree.root, expandedIds]
  );
  
  // Calculate total lines based on expansion state
  const totalLines = useMemo(() => {
    const clonedRoot = JSON.parse(JSON.stringify(parsedTree.root));
    return recalculateLineNumbers(clonedRoot, expandedIds) - 1;
  }, [parsedTree.root, expandedIds]);
  
  // Re-parse when data changes
  useEffect(() => {
    const newTree = parseObject(data, initialExpandDepth);
    setParsedTree(newTree);
    
    // Reset expansion state for new data
    const ids = new Set<string>();
    const collectExpanded = (node: TokenNode) => {
      if (node.expanded) ids.add(node.id);
      node.children.forEach(collectExpanded);
    };
    collectExpanded(newTree.root);
    setExpandedIds(ids);
  }, [data, initialExpandDepth]);
  
  // Toggle expansion for a node
  const toggleExpansion = useCallback((nodeId: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);
  
  // Expand a specific node
  const expandNode = useCallback((nodeId: string) => {
    setExpandedIds(prev => {
      if (prev.has(nodeId)) return prev;
      const next = new Set(prev);
      next.add(nodeId);
      return next;
    });
  }, []);
  
  // Collapse a specific node
  const collapseNode = useCallback((nodeId: string) => {
    setExpandedIds(prev => {
      if (!prev.has(nodeId)) return prev;
      const next = new Set(prev);
      next.delete(nodeId);
      return next;
    });
  }, []);
  
  // Get node by ID
  const getNode = useCallback((nodeId: string): TokenNode | undefined => {
    return parsedTree.nodeMap.get(nodeId);
  }, [parsedTree.nodeMap]);
  
  // Check if node is expanded
  const isExpanded = useCallback((nodeId: string): boolean => {
    return expandedIds.has(nodeId);
  }, [expandedIds]);
  
  const state: InspectorState = {
    hoveredId,
    focusedId,
    expandedIds,
    hasFocus,
  };
  
  return {
    parsedTree,
    state,
    expandedIds,
    visibleNodeIds,
    totalLines,
    setHoveredId,
    setFocusedId,
    setHasFocus,
    toggleExpansion,
    expandNode,
    collapseNode,
    getNode,
    isExpanded,
  };
}

// =============================================================================
// KEYBOARD NAVIGATION HOOK
// =============================================================================

/**
 * Implements roving tabindex keyboard navigation pattern.
 * Supports arrow keys for navigation and Enter for expansion.
 */
export function useKeyboardNavigation(
  visibleNodeIds: string[],
  focusedId: string | null,
  setFocusedId: (id: string | null) => void,
  toggleExpansion: (id: string) => void,
  getNode: (id: string) => TokenNode | undefined,
  onAnnounce: (announcement: Announcement) => void
) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Move focus to next/previous visible node
  const moveFocus = useCallback((direction: 'up' | 'down') => {
    if (visibleNodeIds.length === 0) return;
    
    const currentIndex = focusedId 
      ? visibleNodeIds.indexOf(focusedId)
      : -1;
    
    let nextIndex: number;
    
    if (direction === 'down') {
      nextIndex = currentIndex < visibleNodeIds.length - 1 
        ? currentIndex + 1 
        : 0;
    } else {
      nextIndex = currentIndex > 0 
        ? currentIndex - 1 
        : visibleNodeIds.length - 1;
    }
    
    const nextId = visibleNodeIds[nextIndex];
    setFocusedId(nextId);
    
    // Announce focus change
    const node = getNode(nextId);
    if (node) {
      const keyName = node.key !== null ? String(node.key) : 'root';
      onAnnounce({
        type: 'focus',
        message: `${keyName}, ${node.type}${node.expandable ? ', expandable' : ''}`,
        priority: 'polite',
      });
    }
  }, [visibleNodeIds, focusedId, setFocusedId, getNode, onAnnounce]);
  
  // Handle keyboard events
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        moveFocus('down');
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        moveFocus('up');
        break;
        
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedId) {
          const node = getNode(focusedId);
          if (node?.expandable) {
            toggleExpansion(focusedId);
            
            // Announce state change
            const isNowExpanded = !node.expanded;
            onAnnounce({
              type: isNowExpanded ? 'expansion' : 'collapse',
              message: `${String(node.key ?? 'root')} ${isNowExpanded ? 'expanded' : 'collapsed'}`,
              priority: 'polite',
            });
          }
        }
        break;
        
      case 'ArrowRight':
        event.preventDefault();
        if (focusedId) {
          const node = getNode(focusedId);
          if (node?.expandable && !node.expanded) {
            toggleExpansion(focusedId);
            onAnnounce({
              type: 'expansion',
              message: `${String(node.key ?? 'root')} expanded`,
              priority: 'polite',
            });
          }
        }
        break;
        
      case 'ArrowLeft':
        event.preventDefault();
        if (focusedId) {
          const node = getNode(focusedId);
          if (node?.expandable && node.expanded) {
            toggleExpansion(focusedId);
            onAnnounce({
              type: 'collapse',
              message: `${String(node.key ?? 'root')} collapsed`,
              priority: 'polite',
            });
          }
        }
        break;
        
      case 'Home':
        event.preventDefault();
        if (visibleNodeIds.length > 0) {
          setFocusedId(visibleNodeIds[0]);
        }
        break;
        
      case 'End':
        event.preventDefault();
        if (visibleNodeIds.length > 0) {
          setFocusedId(visibleNodeIds[visibleNodeIds.length - 1]);
        }
        break;
        
      case 'Tab':
        // Let Tab naturally exit the component
        break;
    }
  }, [moveFocus, focusedId, getNode, toggleExpansion, visibleNodeIds, setFocusedId, onAnnounce]);
  
  // Focus the container when focusedId changes
  useEffect(() => {
    if (focusedId && containerRef.current) {
      // Find the focused element and scroll it into view
      const element = containerRef.current.querySelector(`[data-node-id="${focusedId}"]`);
      element?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [focusedId]);
  
  return {
    containerRef,
    handleKeyDown,
    moveFocus,
  };
}

// =============================================================================
// SCREEN READER ANNOUNCEMENTS HOOK
// =============================================================================

/**
 * Manages screen reader announcements using an ARIA live region.
 */
export function useAnnouncements() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  
  const announce = useCallback((newAnnouncement: Announcement) => {
    // Clear any pending announcement
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    setAnnouncement(newAnnouncement);
    
    // Clear announcement after a delay
    timeoutRef.current = window.setTimeout(() => {
      setAnnouncement(null);
    }, 1000);
  }, []);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return {
    announcement,
    announce,
  };
}

// =============================================================================
// LINE NUMBER CALCULATION HOOK
// =============================================================================

/**
 * Calculates line numbers for each node based on current expansion state.
 */
export function useLineNumbers(
  root: TokenNode,
  expandedIds: Set<string>
): Map<string, { start: number; end: number }> {
  return useMemo(() => {
    const lineMap = new Map<string, { start: number; end: number }>();
    let currentLine = 1;
    
    const processNode = (node: TokenNode): void => {
      const start = currentLine;
      
      if (!node.expandable || !expandedIds.has(node.id)) {
        // Single line node
        lineMap.set(node.id, { start, end: start });
        currentLine++;
      } else {
        // Expanded node - opening line
        currentLine++;
        
        // Process children
        for (const child of node.children) {
          processNode(child);
        }
        
        // Closing line
        const end = currentLine;
        lineMap.set(node.id, { start, end });
        currentLine++;
      }
    };
    
    processNode(root);
    
    return lineMap;
  }, [root, expandedIds]);
}

// =============================================================================
// HOVER TRACKING HOOK
// =============================================================================

/**
 * Tracks hover state with debouncing to prevent flickering.
 */
export function useHoverTracking(
  setHoveredId: (id: string | null) => void,
  debounceMs: number = 50
) {
  const timeoutRef = useRef<number | null>(null);
  const currentHoveredRef = useRef<string | null>(null);
  
  const handleMouseEnter = useCallback((nodeId: string) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    currentHoveredRef.current = nodeId;
    setHoveredId(nodeId);
  }, [setHoveredId]);
  
  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      currentHoveredRef.current = null;
      setHoveredId(null);
    }, debounceMs);
  }, [setHoveredId, debounceMs]);
  
  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return {
    handleMouseEnter,
    handleMouseLeave,
  };
}
