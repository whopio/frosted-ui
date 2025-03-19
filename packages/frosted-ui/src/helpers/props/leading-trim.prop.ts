import type { PropDef } from '..';

const trimValues = ['normal', 'start', 'end', 'both'] as const;

const trimProp = {
  type: 'enum',
  values: trimValues,
  default: undefined,
} satisfies PropDef<(typeof trimValues)[number]>;

export { trimProp };
