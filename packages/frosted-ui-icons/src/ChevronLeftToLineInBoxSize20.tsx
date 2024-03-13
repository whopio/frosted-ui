import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBoxSize20 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M1.75 13.25V6.75C1.75 3.98858 3.98858 1.75 6.75 1.75H13.25C16.0114 1.75 18.25 3.98858 18.25 6.75V13.25C18.25 16.0114 16.0114 18.25 13.25 18.25H6.75C3.98858 18.25 1.75 16.0114 1.75 13.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 6.75V13.2499M13.25 6.75L10.25 9.99995L13.25 13.2499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ChevronLeftToLineInBoxSize20;
