import * as React from 'react';
import { IconProps } from './types';

export const Reply12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Reply12"
      {...props}
    >
      <path
        d="M11.25 10c0-3-.5-6-5.5-6V1.95c0-.174-.205-.265-.334-.15L1.08 5.703c-.176.159-.176.435 0 .594L5.416 10.2c.129.115.334.024.334-.15V8c2 0 3.75 0 5.5 2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Reply12.category = 'Arrows';

export default Reply12;
