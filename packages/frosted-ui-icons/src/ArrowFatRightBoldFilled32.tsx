import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.4686 9H3.99278C2.8922 9 2 9.8922 2 10.9928L2 21.0072C2 22.1078 2.8922 23 3.99278 23H15.4686C15.7621 23 16 23.2379 16 23.5314V28.0451C16 28.7445 16.8364 29.1048 17.3447 28.6244L29.4744 17.1585C30.1398 16.5295 30.1398 15.4704 29.4744 14.8414L17.3447 3.37558C16.8364 2.89514 16 3.25546 16 3.95485V8.46859C16 8.76208 15.7621 9 15.4686 9Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBoldFilled32.category = 'Arrows';

export default ArrowFatRightBoldFilled32;
