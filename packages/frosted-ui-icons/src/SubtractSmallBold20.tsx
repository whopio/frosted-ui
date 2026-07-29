import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold20"
      {...props}
    >
      <path
        d="M15 9C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBold20.category = 'Interface General';

export default SubtractSmallBold20;
