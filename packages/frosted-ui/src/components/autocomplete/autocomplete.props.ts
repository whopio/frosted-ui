import type { PropDef } from '../../helpers';
import { colorProp } from '../../helpers';

// Input props (same as TextField)
const inputSizes = ['1', '2', '3', '4'] as const;
const inputVariants = ['surface', 'soft'] as const;

// Popup props (same as BaseMenu)
const popupSizes = ['1', '2', '3'] as const;
const popupVariants = ['solid', 'translucent'] as const;

const autocompleteInputPropDefs = {
  size: { type: 'enum', values: inputSizes, default: '2' },
  variant: { type: 'enum', values: inputVariants, default: 'surface' },
  color: { ...colorProp, default: 'gray' },
} satisfies {
  size: PropDef<(typeof inputSizes)[number]>;
  variant: PropDef<(typeof inputVariants)[number]>;
  color: typeof colorProp;
};

const autocompletePopupPropDefs = {
  size: { type: 'enum', values: popupSizes, default: '2' },
  variant: { type: 'enum', values: popupVariants, default: 'translucent' },
  color: colorProp,
} satisfies {
  size: PropDef<(typeof popupSizes)[number]>;
  variant: PropDef<(typeof popupVariants)[number]>;
  color: typeof colorProp;
};

const autocompleteItemPropDefs = {
  color: colorProp,
} satisfies {
  color: typeof colorProp;
};

export { autocompleteInputPropDefs, autocompleteItemPropDefs, autocompletePopupPropDefs };
