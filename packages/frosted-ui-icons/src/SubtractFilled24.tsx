import * as React from 'react';
import { IconProps } from './types';

export const SubtractFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractFilled24"
      {...props}
    >
      <path
        d="M21.75 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H2.25C1.56 13.25 1 12.69 1 12s.56-1.25 1.25-1.25h19.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractFilled24.category = 'Interface General';

export default SubtractFilled24;
