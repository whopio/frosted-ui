import * as React from 'react';
import { IconProps } from './types';

export const SubtractBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBoldFilled16"
      {...props}
    >
      <path
        d="M13.5 6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-11C1.672 9.5 1 8.828 1 8s.672-1.5 1.5-1.5h11z"
        fill={color}
      />
    </svg>
  );
};

SubtractBoldFilled16.category = 'Interface General';

export default SubtractBoldFilled16;
