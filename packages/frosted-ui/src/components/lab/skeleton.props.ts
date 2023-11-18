import type { PropDef } from '../../helpers';
import { colorProp, highContrastProp } from '../../helpers';
import { avatarPropDefs } from '../avatar.props';
import { textPropDefs } from '../text.props';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const skeletonAvatarPropDefs = {
  size: avatarPropDefs.size,
  color: { ...colorProp, default: 'gray' },
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

const skeletonTextPropDefs = {
  size: { ...textPropDefs.size, default: '3' },
  color: { ...colorProp, default: 'gray' },
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

const skeletonRectPropDefs = {
  color: { ...colorProp, default: 'gray' },
  highContrast: highContrastProp,
} satisfies {
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { skeletonAvatarPropDefs, skeletonRectPropDefs, skeletonTextPropDefs };
