import { colorProp, highContrastProp, PropDef } from '../../helpers';

const sizes = ['1', '2'] as const;

const baseTabsListPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { baseTabsListPropDefs };
