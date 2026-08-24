import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled20"
      {...props}
    >
      <path
        d="M14.75 8.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-9.5C4.56 11.25 4 10.69 4 10s.56-1.25 1.25-1.25h9.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled20.category = 'Interface General';

export default SubtractSmallFilled20;
