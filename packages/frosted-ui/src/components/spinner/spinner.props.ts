import { PropDef } from '../../helpers';

const sizes = ['1', '2', '3', '4', '5', '6'] as const;

const spinnerPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  loading: { type: 'boolean', default: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  loading: PropDef<boolean>;
};

export { spinnerPropDefs };
