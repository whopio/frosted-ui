import { colorProp } from '../../helpers';

const breadcrumbsPropDefs = {
  color: { ...colorProp, default: 'gray' },
} satisfies {
  color: typeof colorProp;
};

export { breadcrumbsPropDefs };
