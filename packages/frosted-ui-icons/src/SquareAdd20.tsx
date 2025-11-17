import * as React from 'react';
import { IconProps } from './types';

export const SquareAdd20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.2083 16.875H4.79167C3.87119 16.875 3.125 16.1288 3.125 15.2083V4.79167C3.125 3.87119 3.87119 3.125 4.79167 3.125H7.29167H12.7083H15.2083C16.1288 3.125 16.875 3.87119 16.875 4.79167V9.375M15.2083 11.875V14.375M15.2083 14.375V16.875M15.2083 14.375H12.7083M15.2083 14.375H17.7083"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SquareAdd20;
