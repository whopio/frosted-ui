import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_882_378)">
        <path
          d="M4.75 4.75H9.625C10.5225 4.75 11.25 5.47754 11.25 6.375C11.25 7.27246 10.5225 8 9.625 8M9.625 8H5.75M9.625 8C10.5225 8 11.25 8.72754 11.25 9.625C11.25 10.5225 10.5225 11.25 9.625 11.25H4.75M5.75 8L5.74988 4.75M5.75 8L5.74988 11.25M6.75 3.5V4.75M9.75 3.5V4.75M6.75 12.5V11.25M9.75 12.5V11.25M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_378">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bitcoin16;
