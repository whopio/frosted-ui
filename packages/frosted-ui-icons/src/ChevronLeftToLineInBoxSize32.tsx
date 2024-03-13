import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBoxSize32 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M3.25 22.25V9.75C3.25 5.88401 6.38401 2.75 10.25 2.75H22.75C26.616 2.75 29.75 5.88401 29.75 9.75V22.25C29.75 26.116 26.616 29.25 22.75 29.25H10.25C6.38401 29.25 3.25 26.116 3.25 22.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.75 10.25V21.7499M22.25 10.25L15.75 16L22.25 21.7499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ChevronLeftToLineInBoxSize32;
