import * as React from 'react';
import { IconProps } from './types';

export const LockOpenFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpenFilled20"
      {...props}
    >
      <path
        d="M10 1c2.21 0 4.141 1.196 5.182 2.976.278.476-.104 1.024-.656 1.024-.303 0-.575-.176-.739-.43C12.987 3.324 11.59 2.5 10 2.5 7.515 2.5 5.5 4.515 5.5 7v1h9.25c2.071 0 3.75 1.679 3.75 3.75v3.5c0 2.071-1.679 3.75-3.75 3.75h-9.5c-2.071 0-3.75-1.679-3.75-3.75v-3.5c0-1.633 1.044-3.021 2.5-3.536V7c0-3.314 2.686-6 6-6z"
        fill={color}
      />
    </svg>
  );
};

LockOpenFilled20.category = 'Security';

export default LockOpenFilled20;
