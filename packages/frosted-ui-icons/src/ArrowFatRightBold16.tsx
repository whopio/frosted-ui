import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBold16"
      {...props}
    >
      <path
        d="M2.855 5h4.917C7.898 5 8 4.898 8 4.772V2.798c0-.3.36-.455.578-.248l5.202 4.955c.283.27.283.72 0 .99L8.578 13.45c-.218.207-.578.053-.578-.248v-1.974c0-.126-.102-.228-.228-.228H2.855C2.383 11 2 10.617 2 10.145v-4.29C2 5.383 2.383 5 2.855 5z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold16.category = 'Arrows';

export default ArrowFatRightBold16;
