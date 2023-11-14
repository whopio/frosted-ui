import { colorProp, highContrastProp } from '../../helpers';

const breadcrumbsPropDefs = {
  color: { ...colorProp, default: 'gray' },
  highContrast: highContrastProp,
} satisfies {
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { breadcrumbsPropDefs };
