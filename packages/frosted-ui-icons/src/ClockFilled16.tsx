import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm-.25 3.25c-.414 0-.75.336-.75.75v4c0 .214.092.416.249.558l.071.056 2.25 1.575c.34.238.807.155 1.044-.184.238-.34.155-.807-.184-1.044L8.5 8.11V4.5c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled16.category = 'Interface General';

export default ClockFilled16;
