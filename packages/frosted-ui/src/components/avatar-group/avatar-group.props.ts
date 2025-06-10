import { colorProp, type PropDef } from '../../helpers';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const variants = ['round', 'square'] as const;

const avatarGroupPropDefs = {
  color: { ...colorProp, default: 'gray' },
  size: { type: 'enum', values: sizes, default: '3' },
  variant: { type: 'enum', values: variants, default: 'round' },
} satisfies {
  color: typeof colorProp;
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { avatarGroupPropDefs };
