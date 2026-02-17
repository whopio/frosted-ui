import { colorProp, highContrastProp } from '../../helpers';

import type { PropDef } from '../../helpers';

const sizes = ['1', '2', '3', '4'] as const;

const contentSizes = ['1', '2', '3'] as const;
const contentVariants = ['solid', 'translucent'] as const;

const comboboxRootPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

const comboboxContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2' },
  variant: { type: 'enum', values: contentVariants, default: 'translucent' },
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
  variant: PropDef<(typeof contentVariants)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

const comboboxItemPropDefs = {
  color: colorProp,
} satisfies {
  color: typeof colorProp;
};

export {
  comboboxContentPropDefs,
  comboboxItemPropDefs,
  comboboxRootPropDefs,
};
