import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBoldFilled32"
      {...props}
    >
      <path
        d="M23.75 14.5C24.5784 14.5 25.25 15.1716 25.25 16C25.25 16.8284 24.5784 17.5 23.75 17.5H8.25C7.42157 17.5 6.75 16.8284 6.75 16C6.75 15.1716 7.42157 14.5 8.25 14.5H23.75Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBoldFilled32.category = 'Interface General';

export default SubtractSmallBoldFilled32;
