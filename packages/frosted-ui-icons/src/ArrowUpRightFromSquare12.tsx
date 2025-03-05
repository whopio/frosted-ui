import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.125 7V8.525C9.125 9.08505 9.125 9.3651 9.016 9.579C8.92015 9.76715 8.76715 9.92015 8.579 10.016C8.3651 10.125 8.08505 10.125 7.525 10.125H3.475C2.91495 10.125 2.63492 10.125 2.42101 10.016C2.23285 9.92015 2.07986 9.76715 1.98399 9.579C1.875 9.3651 1.875 9.08505 1.875 8.525V4.4375C1.875 3.9128 1.875 3.65044 1.97101 3.44744C2.06993 3.2383 2.2383 3.06993 2.44744 2.97101C2.65044 2.875 2.9128 2.875 3.4375 2.875H4.625M6.875 1.875H10.125M10.125 1.875V5.125M10.125 1.875L5.5 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquare12;
