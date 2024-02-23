import { PropDef } from '../helpers';

const sizes = ['1', '2'] as const;

const baseTabsListPropDefs = {
  size: { type: 'enum', values: sizes, default: '2', responsive: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export { baseTabsListPropDefs };
