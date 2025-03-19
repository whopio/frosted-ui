import type { PropDef } from '../helpers';

const contentSizes = ['1', '2', '3'] as const;

const hoverCardContentPropDefs = {
  size: { type: 'enum', values: contentSizes, default: '2' },
} satisfies {
  size: PropDef<(typeof contentSizes)[number]>;
};

export { hoverCardContentPropDefs };
