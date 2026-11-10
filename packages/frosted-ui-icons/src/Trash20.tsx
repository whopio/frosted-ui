import * as React from 'react';
import { IconProps } from './types';

export const Trash20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash20"
      {...props}
    >
      <path
        d="M13.82 5.25l-.65-1.447c-.56-1.25-1.8-2.053-3.17-2.053-1.37 0-2.61.804-3.17 2.053L6.18 5.25m7.64 0H6.18m7.64 0h2.466m-10.106 0H3.714m-1.464 0h1.464m0 0l1.321 10.926c.143 1.184 1.148 2.074 2.34 2.074h5.25c1.192 0 2.197-.89 2.34-2.074l1.32-10.926m0 0h1.465"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Trash20.category = 'Interface General';

export default Trash20;
