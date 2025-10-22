import { type PropDef } from '../../helpers';

const sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const avatarStackPropDefs = {
  size: { type: 'enum', values: sizes, default: '3' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export { avatarStackPropDefs };
