import type { PropDef } from '../helpers';

const contentSizes = ['1', '2', '3'] as const;

const drawerContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '3' },
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
};

export { drawerContentPropDefs };
