import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkFilled20"
      {...props}
    >
      <path
        d="M17.366 3.866c.488-.488 1.28-.488 1.768 0s.488 1.28 0 1.768l-11.25 11.25c-.488.488-1.28.488-1.768 0l-5.25-5.25c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.768 0L7 14.233 17.366 3.865z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkFilled20.category = 'Checkmarks';

export default CheckmarkFilled20;
