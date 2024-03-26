import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare24 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M18.25 14V17.05C18.25 18.1701 18.25 18.7302 18.032 19.158C17.8403 19.5343 17.5343 19.8403 17.158 20.032C16.7302 20.25 16.1701 20.25 15.05 20.25H6.95C5.8299 20.25 5.26984 20.25 4.84202 20.032C4.46569 19.8403 4.15973 19.5343 3.96799 19.158C3.75 18.7302 3.75 18.1701 3.75 17.05V8.875C3.75 7.82559 3.75 7.30088 3.94202 6.89489C4.13986 6.4766 4.4766 6.13986 4.89489 5.94202C5.30088 5.75 5.82559 5.75 6.875 5.75H9.25M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ArrowUpRightFromSquare24;
