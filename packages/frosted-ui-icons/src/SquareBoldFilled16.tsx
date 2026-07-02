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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15 10.5C15 12.9853 12.9853 15 10.5 15H5.5C3.01472 15 1 12.9853 1 10.5V5.5C1 3.01472 3.01472 1 5.5 1H10.5C12.9853 1 15 3.01472 15 5.5V10.5Z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled16.category = 'Interface General';

export default SquareBoldFilled16;
