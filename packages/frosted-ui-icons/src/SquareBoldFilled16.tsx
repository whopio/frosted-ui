import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SquareBoldFilled16"
      {...props}
    >
      <path
        d="M15 10.5c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5v-5C1 3.015 3.015 1 5.5 1h5C12.985 1 15 3.015 15 5.5v5z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled16.category = 'Interface General';

export default SquareBoldFilled16;
