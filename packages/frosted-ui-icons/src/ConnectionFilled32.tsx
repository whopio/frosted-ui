import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ConnectionFilled32"
      {...props}
    >
      <path
        d="M29.733 19.142c1.864 1.053 1.864 3.738 0 4.79l-11.43 6.45c-1.452.818-3.226.817-4.676-.005L2.249 23.93c-1.858-1.053-1.858-3.73 0-4.784l4.022-2.282 6.616 3.749c1.908 1.081 4.243 1.083 6.153.006l6.654-3.756 4.04 2.28zM13.626 1.624C15.076.8 16.852.8 18.304 1.62l11.43 6.452c1.863 1.052 1.863 3.738-.002 4.79l-11.43 6.449c-1.45.819-3.225.818-4.675-.004L2.249 12.86c-1.858-1.054-1.858-3.73 0-4.784l11.377-6.451z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled32.category = 'Interface General';

export default ConnectionFilled32;
