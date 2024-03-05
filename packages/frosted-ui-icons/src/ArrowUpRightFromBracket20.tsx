import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket20 = React.forwardRef<
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
        d="M2 14V14C2 15.6569 3.34315 17 5 17H15C16.6569 17 18 15.6569 18 14V14M9 13V8.72728C9 7.07042 10.3431 5.72727 12 5.72727H17M17 5.72727L14.3333 3M17 5.72727L14.3333 8.45455"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default ArrowUpRightFromBracket20;
