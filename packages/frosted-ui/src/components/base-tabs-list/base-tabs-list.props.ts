import { colorProp, PropDef } from '../../helpers';

const sizes = ['1', '2'] as const;

const baseTabsListPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  color: colorProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
};

export { baseTabsListPropDefs };
