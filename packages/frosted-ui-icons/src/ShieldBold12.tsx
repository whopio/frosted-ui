import * as React from 'react';
import { IconProps } from './types';

export const ShieldBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldBold12"
      {...props}
    >
      <path
        d="M5.423.09c.377-.116.78-.116 1.157 0l.186.068 3.14 1.329c.725.307 1.195 1.02 1.196 1.807V6.71c0 1.677-1.177 2.938-2.16 3.718-1.025.812-2.116 1.323-2.447 1.47-.315.139-.673.139-.988 0-.331-.147-1.422-.658-2.446-1.47C2.078 9.648.9 8.387.9 6.71V3.294c0-.788.47-1.5 1.196-1.807L5.237.158l.186-.067zM2.9 3.319V6.71c0 .714.53 1.458 1.403 2.151.62.492 1.288.856 1.698 1.059.41-.203 1.077-.567 1.698-1.059.874-.693 1.403-1.437 1.403-2.151V3.318L6 2.006l-3.1 1.312z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldBold12.category = 'Security';

export default ShieldBold12;
