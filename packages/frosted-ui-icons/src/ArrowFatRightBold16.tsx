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
        d="M7.772 5H2.855C2.383 5 2 5.383 2 5.855v4.29c0 .472.383.855.855.855h4.917c.126 0 .228.102.228.228v1.974c0 .3.36.455.578.248l5.202-4.955c.283-.27.283-.72 0-.99L8.578 2.55C8.36 2.343 8 2.497 8 2.798v1.974C8 4.898 7.898 5 7.772 5z"
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
