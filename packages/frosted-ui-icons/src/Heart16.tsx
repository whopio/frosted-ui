import * as React from 'react';
import { IconProps } from './types';

export const Heart16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.7273 3C9.58182 3 8.57273 3.59231 8 4.52308C7.42727 3.59231 6.41818 3 5.27273 3C3.47273 3 2 4.52308 2 6.38462C2 9.74103 8 13.1538 8 13.1538C8 13.1538 14 9.76923 14 6.38462C14 4.52308 12.5273 3 10.7273 3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart16;
