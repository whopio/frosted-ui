import { PropDef, colorProp, highContrastProp, trimProp } from '../helpers';

const alignValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
const orientationValues = ['horizontal', 'vertical'] as const;
const sizes = ['1', '2', '3'] as const;

const dataListRootPropDefs = {
  orientation: {
    type: 'enum',
    values: orientationValues,
    default: 'horizontal',
    responsive: true,
  },
  size: {
    type: 'enum',
    values: sizes,
    default: '2',
    responsive: true,
  },
  trim: {
    ...trimProp,
  },
} satisfies {
  orientation: PropDef<(typeof orientationValues)[number]>;
  size: PropDef<(typeof sizes)[number]>;
  trim: typeof trimProp;
};

const dataListItemPropDefs = {
  align: {
    type: 'enum',
    values: alignValues,
    responsive: true,
    default: undefined,
  },
} satisfies {
  align: PropDef<(typeof alignValues)[number]>;
};

const dataListLabelPropDefs = {
  color: colorProp,
  highContrast: highContrastProp,
};

export { dataListItemPropDefs, dataListLabelPropDefs, dataListRootPropDefs };
