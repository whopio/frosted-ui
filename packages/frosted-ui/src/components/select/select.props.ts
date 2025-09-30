import { colorProp, highContrastProp } from '../../helpers';

import type { PropDef } from '../../helpers';

const sizes = ['1', '2', '3', '4'] as const;

const selectRootPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

const triggerVariants = ['surface', 'soft', 'ghost'] as const;

const selectTriggerPropDefs = {
  variant: { type: 'enum', values: triggerVariants, default: 'surface' },
  color: colorProp,
} satisfies {
  variant: PropDef<(typeof triggerVariants)[number]>;
  color: typeof colorProp;
};

const selectContentPropDefs = {
  highContrast: highContrastProp,
} satisfies {
  highContrast: typeof highContrastProp;
};

export { selectContentPropDefs, selectRootPropDefs, selectTriggerPropDefs };
