import * as React from 'react';
import { IconProps } from './types';

export const Sad12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="6" cy="6" r="5.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7.59375 8.75C7.59375 8.75 7.125 7.8125 6 7.8125C4.875 7.8125 4.40625 8.75 4.40625 8.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="3.75" cy="5.688" r=".75" fill={color} />
      <circle cx=".75" cy=".75" r=".75" transform="matrix(-1 0 0 1 9 4.938)" fill={color} />
    </svg>
  );
};

export default Sad12;
