import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallFilled32"
      {...props}
    >
      <path
        d="M24.366 9.116c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-13.5 13.5c-.488.488-1.28.488-1.768 0l-6-6c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l5.116 5.117L24.366 9.116z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallFilled32.category = 'Checkmarks';

export default CheckmarkSmallFilled32;
