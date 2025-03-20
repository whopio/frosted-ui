import type { PropDef } from '../helpers';

const sides = ['all', 'x', 'y', 'top', 'bottom', 'left', 'right'] as const;
const clipValues = ['border-box', 'padding-box'] as const;
const paddingValues = ['current', '0'] as const;

const insetPropDefs = {
  side: { type: 'enum', values: sides, default: 'all' },
  clip: {
    type: 'enum',
    values: clipValues,
    default: 'border-box',
  },
  p: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
  px: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
  py: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
  pt: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
  pr: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
  pb: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
  pl: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
  },
} satisfies {
  side: PropDef<(typeof sides)[number]>;
  clip: PropDef<(typeof clipValues)[number]>;
  p: PropDef<(typeof paddingValues)[number]>;
  px: PropDef<(typeof paddingValues)[number]>;
  py: PropDef<(typeof paddingValues)[number]>;
  pt: PropDef<(typeof paddingValues)[number]>;
  pr: PropDef<(typeof paddingValues)[number]>;
  pb: PropDef<(typeof paddingValues)[number]>;
  pl: PropDef<(typeof paddingValues)[number]>;
};

export { insetPropDefs };
