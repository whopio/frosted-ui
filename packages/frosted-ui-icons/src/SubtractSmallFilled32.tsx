import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled32"
      {...props}
    >
      <path
        d="M23.75 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8.25C7.56 17.25 7 16.69 7 16s.56-1.25 1.25-1.25h15.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled32.category = 'Interface General';

export default SubtractSmallFilled32;
