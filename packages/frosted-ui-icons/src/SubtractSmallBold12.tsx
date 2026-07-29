import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold12"
      {...props}
    >
      <path
        d="M9 5C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H9Z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBold12.category = 'Interface General';

export default SubtractSmallBold12;
