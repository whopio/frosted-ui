import { type PropDef } from '../../helpers';

const sizes = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const shapes = ['circle', 'square'] as const;

const avatarStackPropDefs = {
  size: { type: 'enum', values: sizes, default: '3' },
  shape: { type: 'enum', values: shapes, default: 'circle' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  shape: PropDef<(typeof shapes)[number]>;
};

export { avatarStackPropDefs };
