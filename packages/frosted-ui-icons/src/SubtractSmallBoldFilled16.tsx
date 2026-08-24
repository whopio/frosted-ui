import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBoldFilled16"
      {...props}
    >
      <path
        d="M11.75 6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h7.5z"
        fill={color}
      />
    </svg>
  );
};

SubtractSmallBoldFilled16.category = 'Interface General';

export default SubtractSmallBoldFilled16;
