import { colorProp } from '../../helpers';

const calloutRootPropDefs = {
  color: { ...colorProp, default: undefined },
} satisfies {
  color: typeof colorProp;
};

export { calloutRootPropDefs };
