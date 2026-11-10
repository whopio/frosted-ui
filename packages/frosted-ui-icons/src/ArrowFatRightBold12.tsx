import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBold12"
      {...props}
    >
      <path
        d="M1.75 4H5.8c.11 0 .2-.09.2-.2V1.7c0-.264.316-.4.507-.217l4.287 4.082c.248.237.248.633 0 .87l-4.287 4.082C6.316 10.7 6 10.564 6 10.3V8.2c0-.11-.09-.2-.2-.2H1.75C1.336 8 1 7.664 1 7.25v-2.5c0-.414.336-.75.75-.75z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold12.category = 'Arrows';

export default ArrowFatRightBold12;
