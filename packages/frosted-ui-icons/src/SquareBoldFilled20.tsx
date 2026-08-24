import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SquareBoldFilled20"
      {...props}
    >
      <path
        d="M19 13.4c0 3.093-2.507 5.6-5.6 5.6H6.6C3.507 19 1 16.493 1 13.4V6.6C1 3.507 3.507 1 6.6 1h6.8C16.493 1 19 3.507 19 6.6v6.8z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled20.category = 'Interface General';

export default SquareBoldFilled20;
