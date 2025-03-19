import type { PropDef } from '../helpers';

const sizes = ['1', '2', '3', '4'] as const;

const containerPropDefs = {
  size: { type: 'enum', values: sizes, default: '4', responsive: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export { containerPropDefs };
