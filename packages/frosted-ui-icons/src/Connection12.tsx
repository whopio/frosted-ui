import * as React from 'react';
import { IconProps } from './types';

export const Connection12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Connection12"
      {...props}
    >
      <path
        d="M5.61.08c.25-.107.532-.106.782 0l.122.062 5.002 2.983c.65.388.65 1.33 0 1.718L9.576 6l1.94 1.157c.65.388.65 1.33 0 1.717l-5.002 2.984c-.316.188-.71.188-1.025 0L.487 8.874c-.65-.388-.65-1.329 0-1.717L2.427 6 .487 4.843c-.65-.388-.65-1.33 0-1.718L5.49.142 5.61.079zm.904 7.747c-.316.188-.71.188-1.025 0l-1.598-.954-.25.15-1.665.992L6 10.417l4.025-2.401-1.665-.993-.25-.15-1.597.954zm-4.54-3.843l4.027 2.4 4.026-2.4-4.026-2.402-4.026 2.402z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Connection12.category = 'Interface General';

export default Connection12;
