import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftBold16"
      {...props}
    >
      <path
        d="M13.145 5H8.228C8.102 5 8 4.898 8 4.772V2.798c0-.3-.36-.455-.578-.248L2.22 7.505c-.283.27-.283.72 0 .99l5.202 4.955c.218.207.578.053.578-.248v-1.974c0-.126.102-.228.228-.228h4.917c.472 0 .855-.383.855-.855v-4.29c0-.472-.383-.855-.855-.855z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBold16.category = 'Arrows';

export default ArrowFatLeftBold16;
