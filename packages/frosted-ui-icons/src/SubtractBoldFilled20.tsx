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
        d="M17.5 8.5C18.3284 8.5 19 9.17157 19 10C19 10.8284 18.3284 11.5 17.5 11.5H2.5C1.67157 11.5 1 10.8284 1 10C1 9.17157 1.67157 8.5 2.5 8.5H17.5Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBoldFilled20.category = 'Interface General';

export default SubtractBoldFilled20;
