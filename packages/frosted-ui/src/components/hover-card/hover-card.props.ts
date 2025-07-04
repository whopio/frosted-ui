import type { PropDef } from '../../helpers';

const contentSizes = ['1', '2', '3'] as const;

const variants = ['solid', 'translucent'] as const;

const hoverCardContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2' },
  variant: { type: 'enum', values: variants, default: 'translucent' },
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { hoverCardContentPropDefs };
