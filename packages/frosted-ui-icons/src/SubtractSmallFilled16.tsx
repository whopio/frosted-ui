import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled16"
      {...props}
    >
      <path
        d="M11.75 6.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-7.5C3.56 9.25 3 8.69 3 8s.56-1.25 1.25-1.25h7.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled16.category = 'Interface General';

export default SubtractSmallFilled16;
