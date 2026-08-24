import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled12"
      {...props}
    >
      <path
        d="M8.75 4.75C9.44 4.75 10 5.31 10 6s-.56 1.25-1.25 1.25h-5.5C2.56 7.25 2 6.69 2 6s.56-1.25 1.25-1.25h5.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled12.category = 'Interface General';

export default SubtractSmallFilled12;
