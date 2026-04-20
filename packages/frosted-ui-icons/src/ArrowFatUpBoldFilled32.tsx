import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 16.5314V28.0072C9 29.1078 9.8922 30 10.9928 30H21.0072C22.1078 30 23 29.1078 23 28.0072V16.5314C23 16.2379 23.2379 16 23.5314 16H28.0451C28.7445 16 29.1048 15.1636 28.6244 14.6553L17.1585 2.52562C16.5295 1.86017 15.4704 1.86017 14.8414 2.52562L3.37558 14.6553C2.89514 15.1636 3.25546 16 3.95485 16H8.46859C8.76208 16 9 16.2379 9 16.5314Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBoldFilled32.category = 'Arrows';

export default ArrowFatUpBoldFilled32;
