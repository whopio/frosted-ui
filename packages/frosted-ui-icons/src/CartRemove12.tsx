import * as React from 'react';
import { IconProps } from './types';

export const CartRemove12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M10.625 2.875L9.90085 6.80615C9.81345 7.2806 9.3998 7.625 8.9174 7.625H3.8198C3.34312 7.625 2.93271 7.28855 2.83923 6.8211L1.87058 1.97792C1.80047 1.62735 1.49266 1.375 1.13514 1.375H0.875M5.22595 4.64905L6.375 3.5M6.375 3.5L7.52405 2.35095M6.375 3.5L5.22595 2.35095M6.375 3.5L7.52405 4.64905M4.625 9.5C4.625 9.8452 4.34518 10.125 4 10.125C3.65482 10.125 3.375 9.8452 3.375 9.5C3.375 9.1548 3.65482 8.875 4 8.875C4.34518 8.875 4.625 9.1548 4.625 9.5ZM9.125 9.5C9.125 9.8452 8.8452 10.125 8.5 10.125C8.1548 10.125 7.875 9.8452 7.875 9.5C7.875 9.1548 8.1548 8.875 8.5 8.875C8.8452 8.875 9.125 9.1548 9.125 9.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CartRemove12;
