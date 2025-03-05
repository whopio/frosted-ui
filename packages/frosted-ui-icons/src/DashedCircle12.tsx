import * as React from 'react';
import { IconProps } from './types';

export const DashedCircle12 = ({
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
      <rect
        x=".75"
        y=".75"
        width="10.5"
        height="10.5"
        rx="5.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default DashedCircle12;
