import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBold20"
      {...props}
    >
      <path
        d="M18 9C18.5523 9 19 9.44771 19 10C19 10.5523 18.5523 11 18 11H2C1.44772 11 1 10.5523 1 10C1 9.44771 1.44772 9 2 9H18Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBold20.category = 'Interface General';

export default SubtractBold20;
