/**
 * CodeObjectInspector Module
 * 
 * Exports the main component and related types for external use.
 */

// Main component export
export { CodeObjectInspector, default } from './CodeObjectInspector';

// Type exports for consumers
export type {
  TokenNode,
  TokenValueType,
  ParsedObjectTree,
  InspectorState,
  CodeObjectInspectorProps,
  InspectorTheme,
  AnimationConfig,
  Announcement,
  AnnouncementType,
  LinkConfig,
} from './types';

// Theme and config exports
export { defaultTheme, defaultAnimationConfig } from './types';

// Parser utilities for advanced use cases
export {
  parseObject,
  getValueType,
  isExpandableType,
  formatPrimitiveValue,
  formatCollapsedArray,
  formatCollapsedObject,
  recalculateLineNumbers,
  getVisibleNodeIds,
} from './parser';

// Hooks for custom implementations
export {
  useInspectorState,
  useKeyboardNavigation,
  useAnnouncements,
  useLineNumbers,
  useHoverTracking,
} from './hooks';
