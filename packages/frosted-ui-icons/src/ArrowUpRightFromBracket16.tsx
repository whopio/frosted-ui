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
        d="M1.5 10.75L1.5 13.25C1.5 13.9404 2.05964 14.5 2.75 14.5L13.25 14.5C13.9404 14.5 14.5 13.9404 14.5 13.25V10.75C14.5 10.3358 14.8358 10 15.25 10C15.6642 10 16 10.3358 16 10.75V13.25C16 14.7688 14.7688 16 13.25 16L2.75 16C1.23122 16 3.54481e-07 14.7688 2.28488e-07 13.25L0 10.75C-1.81058e-08 10.3358 0.335786 10 0.75 10C1.16421 10 1.5 10.3358 1.5 10.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M10.202 0.987909C10.4849 0.685279 10.9595 0.669221 11.2621 0.952043L13.7621 3.28841C13.9174 3.43358 14.0039 3.63785 13.9999 3.85042C13.9959 4.063 13.9019 4.26389 13.7412 4.40313L11.2412 6.5698C10.9282 6.84108 10.4545 6.80725 10.1832 6.49424C9.91195 6.18122 9.94578 5.70755 10.2588 5.43627L11.2395 4.58637H8.99621C7.89373 4.58637 7 5.4801 7 6.58258V10.25C7 10.6642 6.66421 11 6.25 11C5.83579 11 5.5 10.6642 5.5 10.25V6.58258C5.5 4.65168 7.06531 3.08637 8.99621 3.08637H11.349L10.2379 2.04796C9.93528 1.76514 9.91922 1.29054 10.202 0.987909Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ArrowUpRightFromBracket16;
