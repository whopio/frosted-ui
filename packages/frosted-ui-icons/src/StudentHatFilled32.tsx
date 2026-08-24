import * as React from 'react';
import { IconProps } from './types';

export const StudentHatFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StudentHatFilled32"
      {...props}
    >
      <path
        d="M14.71 21.087c.807.43 1.776.43 2.582 0l8.703-4.628v5.174c0 1.328-.425 2.764-1.607 3.684-1.523 1.185-4.273 2.682-8.414 2.683-4.149 0-6.89-1.503-8.401-2.69-1.168-.919-1.585-2.344-1.585-3.66v-5.202l8.723 4.64zm.704-18.141c.367-.195.807-.195 1.173 0l13.736 7.305c.445.236.665.675.662 1.112.01.048.015.098.015.15v8.33c0 .414-.335.75-.75.75-.414 0-.75-.336-.75-.75v-6.949l-12.913 6.868c-.366.195-.806.195-1.173 0L1.678 12.457c-.883-.47-.883-1.736 0-2.207l13.736-7.304z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StudentHatFilled32.category = 'Objects';

export default StudentHatFilled32;
