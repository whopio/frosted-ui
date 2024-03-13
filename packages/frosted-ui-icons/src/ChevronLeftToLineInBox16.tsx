import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBox16 = React.forwardRef<
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
        d="M0.75 10.25V5.75C0.75 2.98858 2.98858 0.75 5.75 0.75H10.25C13.0114 0.75 15.25 2.98858 15.25 5.75V10.25C15.25 13.0114 13.0114 15.25 10.25 15.25H5.75C2.98858 15.25 0.75 13.0114 0.75 10.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 4.75V11.2499M11.25 4.75L8.25 7.99995L11.25 11.2499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ChevronLeftToLineInBox16;
