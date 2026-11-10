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
        d="M14.71 21.087c.807.43 1.775.43 2.582 0l8.702-4.628v5.174c0 1.328-.425 2.764-1.606 3.684C22.865 26.502 20.115 28 15.974 28c-4.15 0-6.89-1.503-8.402-2.69-1.168-.918-1.585-2.344-1.585-3.659v-5.203l8.723 4.64zm.704-18.141c.367-.195.807-.195 1.174 0l13.735 7.305c.445.236.665.675.662 1.112.01.048.015.098.015.15v8.33c0 .415-.336.75-.75.75s-.75-.336-.75-.75v-6.948l-12.912 6.867c-.367.195-.807.195-1.174 0L1.68 12.458c-.884-.47-.884-1.737 0-2.207l13.735-7.305z"
        fill={color}
      />
    </svg>
  );
};

StudentHatFilled32.category = 'Objects';

export default StudentHatFilled32;
