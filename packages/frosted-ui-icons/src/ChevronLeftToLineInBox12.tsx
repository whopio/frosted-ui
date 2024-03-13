import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBox12 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M0.75 8.25V3.75C0.75 2.09315 2.09315 0.75 3.75 0.75H8.25C9.90685 0.75 11.25 2.09315 11.25 3.75V8.25C11.25 9.90685 9.90685 11.25 8.25 11.25H3.75C2.09315 11.25 0.75 9.90685 0.75 8.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 3.75005V8.24995M8.25 3.75005L6.25 6L8.25 8.24995"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ChevronLeftToLineInBox12;
