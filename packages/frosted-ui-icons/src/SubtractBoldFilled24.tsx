import * as React from 'react';
import { IconProps } from './types';

export const SubtractBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBoldFilled24"
      {...props}
    >
      <path
        d="M21.5 10.5C22.3284 10.5 23 11.1716 23 12C23 12.8284 22.3284 13.5 21.5 13.5H2.5C1.67157 13.5 1 12.8284 1 12C1 11.1716 1.67157 10.5 2.5 10.5H21.5Z"
        fill={color}
      />
    </svg>
  );
};

SubtractBoldFilled24.category = 'Interface General';

export default SubtractBoldFilled24;
