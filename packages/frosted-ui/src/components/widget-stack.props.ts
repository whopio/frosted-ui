import { PropDef } from '../helpers';

const orientationValues = ['horizontal', 'vertical'] as const;

const widgetStackRootPropDefs = {
  orientation: {
    type: 'enum',
    values: orientationValues,
    default: 'vertical',
  },
} satisfies {
  orientation: PropDef<(typeof orientationValues)[number]>;
};

export { widgetStackRootPropDefs };
