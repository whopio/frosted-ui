import { type ActiveIndicatorOptions } from '../../helpers/use-active-indicator-animation';

const segmentedControlIndicatorOptions: ActiveIndicatorOptions = {
  activeTriggerSelector: '.fui-BaseSegmentedControlTrigger:is([data-active], [data-selected], [data-checked])',
  activeAttributes: ['data-active', 'data-selected', 'data-checked'],
  pseudoElement: '::before',
  windowSelector: ':scope > .fui-BaseSegmentedControlThumb',
};

export { segmentedControlIndicatorOptions };
