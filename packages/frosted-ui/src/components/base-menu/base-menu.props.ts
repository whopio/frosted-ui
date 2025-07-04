import type { PropDef } from '../../helpers';
import { colorProp } from '../../helpers';

const contentSizes = ['1', '2', '3'] as const;

const variants = ['solid', 'translucent'] as const;

const baseMenuContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2' },
  color: colorProp,
  variant: { type: 'enum', values: variants, default: 'translucent' },
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
  color: typeof colorProp;
  variant: PropDef<(typeof variants)[number]>;
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
