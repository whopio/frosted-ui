import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBold24"
      {...props}
    >
      <path
        d="M2.311 17.616l7.73-14.202c.869-1.597 3.164-1.592 4.026.01l7.646 14.202C22.534 19.15 21.429 21 19.698 21H4.322c-1.737 0-2.841-1.858-2.01-3.384z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold24.category = 'Interface General';

export default TriangleBold24;
