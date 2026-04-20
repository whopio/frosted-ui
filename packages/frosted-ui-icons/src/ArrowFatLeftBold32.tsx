import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.5314 9H28.0072C29.1078 9 30 9.8922 30 10.9928V21.0072C30 22.1078 29.1078 23 28.0072 23H16.5314C16.2379 23 16 23.2379 16 23.5314V28.0451C16 28.7445 15.1636 29.1048 14.6553 28.6244L2.52562 17.1585C1.86017 16.5295 1.86017 15.4704 2.52562 14.8414L14.6553 3.37558C15.1636 2.89514 16 3.25546 16 3.95485V8.46859C16 8.76208 16.2379 9 16.5314 9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold32.category = 'Arrows';

export default ArrowFatLeftBold32;
