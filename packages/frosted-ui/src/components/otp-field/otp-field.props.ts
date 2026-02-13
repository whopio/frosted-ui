import { colorProp } from '../../helpers';

const otpFieldPropDefs = {
  color: { ...colorProp, default: 'gray' },
} satisfies {
  color: typeof colorProp;
};

export { otpFieldPropDefs };
