import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1ZM15.75 6.25C15.3358 6.25 15.0001 6.58583 15 7V16.5C15 16.6947 15.0756 16.8806 15.209 17.0195L15.2695 17.0762L19.7695 20.8262C20.0877 21.0913 20.561 21.0485 20.8262 20.7305C21.0913 20.4123 21.0485 19.939 20.7305 19.6738L16.5 16.1484V7C16.4999 6.58583 16.1642 6.25 15.75 6.25Z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled32.category = 'Interface General';

export default ClockFilled32;
