import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.4194 12.4195L3.58061 3.58071M3.58061 3.58071L10.4749 3.75749M3.58061 3.58071L3.75738 10.475"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpLeft16;
