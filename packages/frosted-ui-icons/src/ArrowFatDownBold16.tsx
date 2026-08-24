import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBold16"
      {...props}
    >
      <path
        d="M5 7.772V2.855C5 2.383 5.383 2 5.855 2h4.29c.472 0 .855.383.855.855v4.917c0 .126.102.228.228.228h1.974c.3 0 .455.36.248.578L8.495 13.78c-.27.283-.72.283-.99 0L2.55 8.578C2.343 8.36 2.497 8 2.798 8h1.974C4.898 8 5 7.898 5 7.772z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold16.category = 'Arrows';

export default ArrowFatDownBold16;
