import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket16 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M2 11V11C2 12.1046 2.89543 13 4 13H12C13.1046 13 14 12.1046 14 11V11M7 10V7.90909C7 6.25224 8.34315 4.90909 10 4.90909H14M14 4.90909L11.6667 3M14 4.90909L11.6667 6.81818"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ArrowUpRightFromBracket16;
