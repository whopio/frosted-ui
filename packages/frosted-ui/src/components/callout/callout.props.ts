import { colorProp, highContrastProp } from '../../helpers';

const calloutRootPropDefs = {
  color: { ...colorProp, default: undefined },
  highContrast: highContrastProp,
} satisfies {
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { calloutRootPropDefs };
