import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22 3.75C22.5522 3.75004 23 4.19774 23 4.75V13.375C23 14.9628 21.7128 16.25 20.125 16.25H4.51465L7.18652 18.7734C7.58782 19.1527 7.60567 19.7851 7.22656 20.1865C6.84734 20.5879 6.21494 20.6057 5.81348 20.2266L1.31348 15.9766C1.11356 15.7877 1 15.525 1 15.25C1 14.9749 1.11356 14.7123 1.31348 14.5234L5.81348 10.2734C6.21494 9.89432 6.84734 9.91214 7.22656 10.3135C7.60567 10.7149 7.58782 11.3473 7.18652 11.7266L4.51465 14.25H20.125C20.6082 14.25 21 13.8582 21 13.375V4.75C21 4.19771 21.4477 3.75 22 3.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleLeftBold24.category = 'Arrows';

export default ArrowDownAngleLeftBold24;
