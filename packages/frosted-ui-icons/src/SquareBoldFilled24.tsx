import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23 16.25C23 19.9779 19.9779 23 16.25 23H7.75C4.02208 23 1 19.9779 1 16.25V7.75C1 4.02208 4.02208 1 7.75 1H16.25C19.9779 1 23 4.02208 23 7.75V16.25Z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled24.category = 'Interface General';

export default SquareBoldFilled24;
