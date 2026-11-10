import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBold12"
      {...props}
    >
      <path
        d="M10.25 4H6.2c-.11 0-.2-.09-.2-.2V1.7c0-.264-.316-.4-.507-.217L1.206 5.565c-.248.237-.248.633 0 .87l4.287 4.082c.191.182.507.047.507-.217V8.2c0-.11.09-.2.2-.2h4.05c.414 0 .75-.336.75-.75v-2.5c0-.414-.336-.75-.75-.75z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold12.category = 'Arrows';

export default ArrowFatLeftBold12;
