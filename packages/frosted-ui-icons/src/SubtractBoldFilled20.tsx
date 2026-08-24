import * as React from 'react';
import { IconProps } from './types';

export const SubtractBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBoldFilled20"
      {...props}
    >
      <path
        d="M17.5 8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-15c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h15z"
        fill={color}
      />
    </svg>
  );
};

SubtractBoldFilled20.category = 'Interface General';

export default SubtractBoldFilled20;
