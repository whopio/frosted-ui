import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallFilled24"
      {...props}
    >
      <path
        d="M17.75 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6.25C5.56 13.25 5 12.69 5 12s.56-1.25 1.25-1.25h11.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallFilled24.category = 'Interface General';

export default SubtractSmallFilled24;
