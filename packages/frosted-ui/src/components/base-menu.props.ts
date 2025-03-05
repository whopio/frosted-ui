import type { PropDef } from '../helpers';
import { colorProp, highContrastProp } from '../helpers';

const contentSizes = ['1', '2', '3'] as const;

const baseMenuContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2', responsive: true },
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

const baseMenuItemPropDefs = {
  color: colorProp,
  shortcut: { type: 'string', default: undefined },
} satisfies {
  color: typeof colorProp;
  shortcut: PropDef<string>;
};

const baseMenuCheckboxItemPropDefs = {
  shortcut: { type: 'string', default: undefined },
} satisfies {
  shortcut: PropDef<string>;
};

export { baseMenuCheckboxItemPropDefs, baseMenuContentPropDefs, baseMenuItemPropDefs };
