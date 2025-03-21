import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFlush12 = ({
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
        d="M4.625 1.875H3.475C2.91495 1.875 2.63492 1.875 2.42101 1.98399C2.23285 2.07986 2.07986 2.23285 1.98399 2.42101C1.875 2.63492 1.875 2.91495 1.875 3.475V8.525C1.875 9.08505 1.875 9.3651 1.98399 9.579C2.07986 9.76715 2.23285 9.92015 2.42101 10.016C2.63492 10.125 2.91495 10.125 3.475 10.125H8.525C9.08505 10.125 9.3651 10.125 9.579 10.016C9.76715 9.92015 9.92015 9.76715 10.016 9.579C10.125 9.3651 10.125 9.08505 10.125 8.525V7.375M6.875 1.875H10.125M10.125 1.875V5.125M10.125 1.875L5.5 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightFromSquareFlush12;
