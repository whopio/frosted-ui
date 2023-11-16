import type { PropDef } from '..';
import { semanticColors, themePropDefs } from '../../theme-options';

const colorsWithSemanticColors = [
  ...semanticColors,
  ...themePropDefs.accentColor.values,
];
const colorProp = {
  type: 'enum',
  values: colorsWithSemanticColors,
  default: undefined as (typeof colorsWithSemanticColors)[number] | undefined,
} satisfies PropDef<(typeof colorsWithSemanticColors)[number]>;

// `interface HTMLAttributes` includes 'color', which may lead to clashes
type PropsWithoutRefOrColor<T extends React.ElementType> = Omit<
  React.ComponentPropsWithRef<T>,
  'color'
>;

export { colorProp };
export type { PropsWithoutRefOrColor };
