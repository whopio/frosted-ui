import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBoldFilled32"
      {...props}
    >
      <path
        d="M23.75 14.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H8.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h15.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBoldFilled32.category = 'Interface General';

export default SubtractSmallBoldFilled32;
