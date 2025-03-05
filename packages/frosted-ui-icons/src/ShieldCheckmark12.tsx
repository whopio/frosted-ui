import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.625 5.75L5.5 6.625L7.375 4.75002M10.125 5.9562V3.47078C10.125 3.04035 9.84955 2.65821 9.44125 2.52209L6.31625 1.48043C6.11095 1.412 5.88905 1.412 5.68375 1.48043L2.55877 2.52209C2.15043 2.65821 1.875 3.04035 1.875 3.47078V5.9562C1.875 8.4424 4 9.625 6 10.704C8 9.625 10.125 8.4424 10.125 5.9562Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheckmark12;
