import type { PropDef } from '../../helpers';
import { colorProp, highContrastProp } from '../../helpers';
import { avatarPropDefs } from '../avatar/avatar.props';
import { textPropDefs } from '../text/text.props';

const sizes = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const skeletonAvatarPropDefs = {
  size: avatarPropDefs.size,
  shape: avatarPropDefs.shape,
  color: { ...colorProp, default: 'gray' },
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  shape: PropDef<(typeof avatarPropDefs.shape.values)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

const skeletonTextPropDefs = {
  size: { ...textPropDefs.size, default: '3' },
  color: { ...colorProp, default: 'gray' },
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof textPropDefs.size.values)[number]>;
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
