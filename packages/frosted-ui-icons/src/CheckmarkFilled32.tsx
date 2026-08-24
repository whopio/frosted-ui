import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkFilled32"
      {...props}
    >
      <path
        d="M27.366 7.616c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.767l-16.75 16.75c-.235.235-.553.367-.884.367-.332 0-.65-.132-.884-.367l-7.75-7.749c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0l6.866 6.866L27.366 7.616z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkFilled32.category = 'Checkmarks';

export default CheckmarkFilled32;
