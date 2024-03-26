import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFlush24 = React.forwardRef<
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
        d="M9.25 3.75H6.95C5.8299 3.75 5.26984 3.75 4.84202 3.96799C4.46569 4.15973 4.15973 4.46569 3.96799 4.84202C3.75 5.26984 3.75 5.8299 3.75 6.95V17.05C3.75 18.1701 3.75 18.7302 3.96799 19.158C4.15973 19.5343 4.46569 19.8403 4.84202 20.032C5.26984 20.25 5.8299 20.25 6.95 20.25H17.05C18.1701 20.25 18.7302 20.25 19.158 20.032C19.5343 19.8403 19.8403 19.5343 20.032 19.158C20.25 18.7302 20.25 18.1701 20.25 17.05V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ArrowUpRightFromSquareFlush24;
