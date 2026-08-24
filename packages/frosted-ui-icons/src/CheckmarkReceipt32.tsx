import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceipt32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceipt32"
      {...props}
    >
      <path
        d="M24.25 1C26.873 1 29 3.127 29 5.75v23.84c0 1.025-1.096 1.675-1.995 1.186l-5.36-2.914-4.903 2.92c-.457.271-1.027.272-1.484 0l-4.897-2.92-5.367 2.916c-.9.489-1.994-.163-1.994-1.186V5.75C3 3.127 5.127 1 7.75 1h16.5zM7.75 2.5C5.955 2.5 4.5 3.955 4.5 5.75v23.589l5.272-2.862.149-.069c.304-.117.642-.11.941.019l.147.075L16 29.477l5.002-2.976.146-.074c.3-.129.638-.136.942-.019l.148.07 5.262 2.86V5.75c0-1.795-1.455-3.25-3.25-3.25H7.75zm12.47 7.72c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-6.63 6.63c-.14.14-.331.22-.53.22s-.39-.08-.53-.22l-2.87-2.87c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0l2.34 2.34 6.1-6.1z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceipt32.category = 'Money & Shopping';

export default CheckmarkReceipt32;
