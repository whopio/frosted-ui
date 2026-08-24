import * as React from 'react';
import { IconProps } from './types';

export const SubtractFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractFilled20"
      {...props}
    >
      <path
        d="M17.75 8.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H2.25C1.56 11.25 1 10.69 1 10s.56-1.25 1.25-1.25h15.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractFilled20.category = 'Interface General';

export default SubtractFilled20;
