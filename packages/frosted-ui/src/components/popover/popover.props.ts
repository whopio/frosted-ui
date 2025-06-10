import type { PropDef } from '../../helpers';

const contentSizes = ['1', '2', '3', '4'] as const;

const variants = ['solid', 'translucent'] as const;

const popoverContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2' },
  variant: { type: 'enum', values: variants, default: 'translucent' },
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { popoverContentPropDefs };
