import * as React from 'react';
import { IconProps } from './types';

export const CameraAddFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CameraAddFilled20"
      {...props}
    >
      <path
        d="M11.895 1c.85 0 1.66.288 2.312.798.027.021.043.054.043.089 0 .062-.05.113-.113.113H14c-1.243 0-2.25 1.007-2.25 2.25S12.757 6.5 14 6.5c.138 0 .25.112.25.25C14.25 7.993 15.257 9 16.5 9s2.25-1.007 2.25-2.25c0-.138.112-.25.25-.25l.05-.001c.345-.008.7.187.7.531v8.22c0 2.071-1.679 3.75-3.75 3.75H4C1.929 19 .25 17.321.25 15.25V7.03C.25 5.357 1.607 4 3.28 4c.512 0 .99-.256 1.273-.682l.432-.648C5.681 1.627 6.852 1 8.105 1h3.79zM10 6.5c-2.347 0-4.25 1.903-4.25 4.25S7.653 15 10 15s4.25-1.903 4.25-4.25S12.347 6.5 10 6.5zM10 8c1.519 0 2.75 1.231 2.75 2.75S11.519 13.5 10 13.5s-2.75-1.231-2.75-2.75S8.481 8 10 8zM16.5.75c.552 0 1 .448 1 1v1.5H19c.552 0 1 .448 1 1s-.448 1-1 1h-1.5v1.5c0 .552-.448 1-1 1s-1-.448-1-1v-1.5H14c-.552 0-1-.448-1-1s.448-1 1-1h1.5v-1.5c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

CameraAddFilled20.category = 'Interface General';

export default CameraAddFilled20;
