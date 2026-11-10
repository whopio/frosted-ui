import * as React from 'react';
import { IconProps } from './types';

export const ShieldCrossBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCrossBoldFilled12"
      {...props}
    >
      <path
        d="M5.423.09c.377-.116.78-.116 1.157 0l.186.068 3.14 1.329c.724.307 1.195 1.019 1.196 1.807V6.71c0 1.677-1.177 2.938-2.16 3.717-1.025.813-2.116 1.324-2.447 1.47-.315.14-.673.14-.988 0-.332-.147-1.422-.658-2.446-1.47C2.078 9.648.9 8.387.9 6.71V3.294c0-.788.47-1.5 1.196-1.807l3.14-1.33.186-.067zM8.03 3.782c-.293-.293-.767-.293-1.06 0l-.97.97-.97-.97c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l.97.97-.97.97c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l.97-.97.97.97c.293.293.767.293 1.06 0 .293-.293.293-.767 0-1.06l-.97-.97.97-.97c.293-.293.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

ShieldCrossBoldFilled12.category = 'Security';

export default ShieldCrossBoldFilled12;
