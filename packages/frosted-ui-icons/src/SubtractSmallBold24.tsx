import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold24"
      {...props}
    >
      <path
        d="M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H18Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBold24.category = 'Interface General';

export default SubtractSmallBold24;
