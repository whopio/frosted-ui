import * as React from 'react';
import { IconProps } from './types';

export const Cursor20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Cursor20"
      {...props}
    >
      <path
        d="M6.704 17.498L1.847 3.761c-.42-1.189.725-2.334 1.914-1.914l13.737 4.857c.885.313.996 1.52.183 1.99l-3.302 1.905c-.57.328-.672 1.108-.207 1.573l3.664 3.664c.265.265.414.625.414 1 0 .78-.633 1.414-1.414 1.414-.375 0-.735-.149-1-.414l-3.664-3.664c-.466-.465-1.245-.362-1.574.207l-1.905 3.302c-.469.814-1.676.703-1.99-.183z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Cursor20.category = 'Arrows';

export default Cursor20;
