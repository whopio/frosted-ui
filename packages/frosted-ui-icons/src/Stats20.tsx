import * as React from 'react';
import { IconProps } from './types';

export const Stats20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 2.96875V15.0625C1.75 16.2706 2.72938 17.25 3.9375 17.25H18.2812"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.3125 13.0625L8.125 9.25L10.9375 12.0625L16.25 6.75M16.25 6.75H13.25M16.25 6.75V9.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Stats20;
