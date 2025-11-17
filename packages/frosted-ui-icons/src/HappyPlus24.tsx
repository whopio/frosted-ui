import * as React from 'react';
import { IconProps } from './types';

export const HappyPlus24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.75 7.75V4.75M18.75 4.75V1.75M18.75 4.75H15.75M18.75 4.75H21.75M21.4401 7.99978C21.9616 9.22887 22.25 10.5807 22.25 12 22.25 17.6609 17.6609 22.25 12 22.25 6.33908 22.25 1.75 17.6609 1.75 12 1.75 6.33908 6.33908 1.75 12 1.75 13.041 1.75 14.0457 1.90517 14.9923 2.19365"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.25" cy="13.25" r="1.25" fill={color} />
      <circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 18 12)" fill={color} />
      <path
        d="M15.25 16.375C15.25 16.375 14.2941 18.25 12 18.25C9.70588 18.25 8.75 16.375 8.75 16.375"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HappyPlus24;
