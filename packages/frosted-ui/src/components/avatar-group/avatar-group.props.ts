import { colorProp, type PropDef } from '../../helpers';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const shapes = ['circle', 'square'] as const;

const avatarGroupPropDefs = {
  color: { ...colorProp, default: 'gray' },
  size: { type: 'enum', values: sizes, default: '3' },
  shape: { type: 'enum', values: shapes, default: 'circle' },
} satisfies {
  color: typeof colorProp;
  size: PropDef<(typeof sizes)[number]>;
  shape: PropDef<(typeof shapes)[number]>;
};

export { avatarGroupPropDefs };
