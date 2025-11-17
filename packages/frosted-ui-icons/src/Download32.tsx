import * as React from 'react';
import { IconProps } from './types';

export const Download32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.6667 17.6666L16.9428 22.3905C16.4222 22.9112 15.5779 22.9112 15.0572 22.3905L10.3334 17.6666M16 3.66663V22.3333M25.6667 28.3333H6.33337"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Download32;
