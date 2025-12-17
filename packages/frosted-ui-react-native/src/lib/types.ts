/**
 * Accent colors available in Frosted UI
 * These match the web version's accentColor values
 */
export type AccentColor =
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'brown'
  | 'blue'
  | 'orange'
  | 'indigo'
  | 'sky'
  | 'mint'
  | 'yellow'
  | 'amber'
  | 'lime'
  | 'lemon'
  | 'magenta'
  | 'gold'
  | 'bronze'
  | 'gray';

/**
 * Semantic colors
 */
export type SemanticColor = 'danger' | 'warning' | 'success' | 'info';

/**
 * All available color values for component color props
 */
export type Color = AccentColor | SemanticColor;
