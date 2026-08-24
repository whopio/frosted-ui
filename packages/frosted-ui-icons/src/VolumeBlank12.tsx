import * as React from 'react';
import { IconProps } from './types';

export const VolumeBlank12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeBlank12"
      {...props}
    >
      <path
        d="M4.168 1.435C5.05.638 6.5 1.255 6.5 2.48v7.04c0 1.265-1.545 1.88-2.416.963L2.678 9H1.5C.672 9 0 8.328 0 7.5v-3C0 3.672.672 3 1.5 3h1.177l1.407-1.483.084-.082zM3.692 4.11c-.236.248-.564.39-.907.39H1.5v3h1.285c.3 0 .59.107.815.301l.092.089L5 9.269V2.73L3.692 4.11z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeBlank12.category = 'Sound & Music';

export default VolumeBlank12;
