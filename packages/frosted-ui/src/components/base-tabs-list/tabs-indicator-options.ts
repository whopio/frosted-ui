import { type ActiveIndicatorOptions } from '../../helpers/use-active-indicator-animation';

const tabsIndicatorOptions: ActiveIndicatorOptions = {
  activeTriggerSelector: '.fui-BaseTabsTrigger:is([data-active], [data-selected])',
  activeAttributes: ['data-active', 'data-selected'],
  pseudoElement: '::after',
};

export { tabsIndicatorOptions };
