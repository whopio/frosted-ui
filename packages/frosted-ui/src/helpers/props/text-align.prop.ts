import type { PropDef } from '..';

const alignValues = ['left', 'center', 'right'] as const;

const alignProp = {
  type: 'enum',
  values: alignValues,
  default: undefined,
} satisfies PropDef<(typeof alignValues)[number]>;

export { alignProp };
