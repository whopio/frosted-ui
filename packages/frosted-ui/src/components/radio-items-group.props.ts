import { colorProp, highContrastProp } from '../helpers';

const radioItemsGroupPropDefs = {
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { radioItemsGroupPropDefs };
