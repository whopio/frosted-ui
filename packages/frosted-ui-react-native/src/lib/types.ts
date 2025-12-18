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
 * Semantic colors that map to accent colors based on ThemeProvider settings
 */
export type SemanticColor = 'danger' | 'warning' | 'success' | 'info';

/**
 * Special color that uses the ThemeProvider's accentColor setting
 */
export type DynamicAccentColor = 'accent';

/**
 * All available color values for component color props
 */
export type Color = AccentColor | SemanticColor | DynamicAccentColor;
