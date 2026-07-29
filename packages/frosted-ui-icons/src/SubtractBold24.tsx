import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBold24"
      {...props}
    >
      <path
        d="M22 11C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H22Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBold24.category = 'Interface General';

export default SubtractBold24;
