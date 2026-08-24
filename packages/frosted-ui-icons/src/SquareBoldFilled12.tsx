import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SquareBoldFilled12"
      {...props}
    >
      <path d="M12 8c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v4z" fill={color} />
    </svg>
  );
};

SquareBoldFilled12.category = 'Interface General';

export default SquareBoldFilled12;
