import type { PropDef } from '../../helpers';
const sizes = ['1', '2', '3'] as const;

const countryFlagPropDefs = {
  country: { type: 'string', required: true },
  size: { type: 'enum', values: sizes, default: '3' },
} satisfies {
  country: PropDef<string>;
  size: PropDef<(typeof sizes)[number]>;
};

export { countryFlagPropDefs };
