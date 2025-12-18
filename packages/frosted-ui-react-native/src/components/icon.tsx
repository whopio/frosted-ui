import { TextStyleContext } from '@/components/text';
import { themeVars } from '@/lib/theme-vars';
import type { LucideIcon, LucideProps } from 'lucide-react-native';
import * as React from 'react';

type IconProps = LucideProps & {
  as: LucideIcon;
};

/**
 * A wrapper component for Lucide icons.
 *
 * This component allows you to render any Lucide icon with automatic color
 * inheritance from TextStyleContext.
 *
 * @component
 * @example
 * ```tsx
 * import { ArrowRight } from 'lucide-react-native';
 * import { Icon } from '@frosted-ui/react-native';
 *
 * <Icon as={ArrowRight} size={16} />
 * ```
 *
 * @param {LucideIcon} as - The Lucide icon component to render.
 * @param {number} size - Icon size (defaults to 14).
 * @param {...LucideProps} ...props - Additional Lucide icon props passed to the "as" icon.
 */
function Icon({ as: IconComponent, size = 14, color, ...props }: IconProps) {
  const textStyleContext = React.useContext(TextStyleContext);

  // Use color from context if available, otherwise default to gray-12
  const resolvedColor =
    color ?? textStyleContext?.color ?? themeVars.colors.light.palettes.gray['12'];

  return <IconComponent size={size} color={resolvedColor} {...props} />;
}

export { Icon };
