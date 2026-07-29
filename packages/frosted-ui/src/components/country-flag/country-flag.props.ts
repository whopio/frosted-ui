import type { PropDef } from '../../helpers';
import { ISO3166Alpha2Codes } from './country-codes';
const sizes = ['1', '2', '3', '4'] as const;

const countryFlagPropDefs = {
  countryCode: { type: 'enum', values: ISO3166Alpha2Codes, required: true },
  size: { type: 'enum', values: sizes, default: '2' },
} satisfies {
  countryCode: PropDef<(typeof ISO3166Alpha2Codes)[number]>;
  size: PropDef<(typeof sizes)[number]>;
};

export { countryFlagPropDefs };
