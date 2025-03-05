import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M17.5778 6.86111C17.3271 5.65617 16.2789 2.75 12.0017 2.75C7.89058 2.75 6.34892 5.42341 6.34892 7.375C6.34892 10.4127 9.15452 11.2058 12.0017 11.9657M5.96875 17.1389C6.3534 18.3438 7.72446 21.25 12.0017 21.25C16.1128 21.25 17.9114 18.5766 17.9114 16.625C17.9114 15.8732 17.7396 15.259 17.4378 14.7486M2.75 12H21.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Strikethrough24;
