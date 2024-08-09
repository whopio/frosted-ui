import { PropDef } from '../helpers';
import { textPropDefs } from './text.props';

const orientationValues = ['horizontal', 'vertical'] as const;

const widgetStackRootPropDefs = {
  orientation: {
    type: 'enum',
    values: orientationValues,
    default: 'vertical',
    responsive: true,
  },
  color: textPropDefs.color,
} satisfies {
  orientation: PropDef<(typeof orientationValues)[number]>;
  color: typeof textPropDefs.color;
};

export { widgetStackRootPropDefs };
