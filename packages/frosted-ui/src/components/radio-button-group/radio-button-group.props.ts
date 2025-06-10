import { colorProp, highContrastProp } from '../../helpers';

const radioButtonGroupPropDefs = {
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { radioButtonGroupPropDefs };
