import type { PropDef } from '../../helpers';
import { colorProp } from '../../helpers';

// Content props (same as BaseMenu)
const contentSizes = ['1', '2', '3'] as const;
const contentVariants = ['solid', 'translucent'] as const;

const autocompleteContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2' },
  variant: { type: 'enum', values: contentVariants, default: 'translucent' },
  color: colorProp,
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
  variant: PropDef<(typeof contentVariants)[number]>;
  color: typeof colorProp;
};

const autocompleteItemPropDefs = {
  color: colorProp,
} satisfies {
  color: typeof colorProp;
};

export { autocompleteContentPropDefs, autocompleteItemPropDefs };
