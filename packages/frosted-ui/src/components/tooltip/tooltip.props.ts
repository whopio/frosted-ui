import type { PropDef } from '../../helpers';

const typeValues = ['always', 'overflow'] as const;

const tooltipPropDefs = {
  content: { type: 'ReactNode', default: undefined, required: true },
  type: {
    type: 'enum',
    values: typeValues,
    default: 'always',
  },
} satisfies {
  content: PropDef<React.ReactNode>;
  type: PropDef<(typeof typeValues)[number]>;
};

export { tooltipPropDefs };
