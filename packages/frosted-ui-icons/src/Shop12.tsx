import * as React from 'react';
import { IconProps } from './types';

export const Shop12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.25 4.5V9.26286C1.25 10.3603 2.13967 11.25 3.23714 11.25H8.76286C9.86033 11.25 10.75 10.3603 10.75 9.26286V4.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4.25 11.25V8.13597C4.25 7.9228 4.4228 7.75 4.63597 7.75H7.36403C7.5772 7.75 7.75 7.9228 7.75 8.13597V11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.9845 1.98842C10.726 1.24686 10.0267.75 9.24139.75H7.41407L7.86861 3.34086C8.01156 4.15567 8.71924 4.75 9.54649 4.75 10.485 4.75 11.25 3.98384 11.25 3.04073 11.25 2.8488 11.2177 2.65757 11.1547 2.4769L10.9845 1.98842zM1.01551 1.98842C1.27396 1.24686 1.9733.75 2.75861.75H4.58593L4.13139 3.34086C3.98844 4.15567 3.28076 4.75 2.45351 4.75 1.51498 4.75.75 3.98384.75 3.04073.75 2.8488.782305 2.65757.845271 2.4769L1.01551 1.98842z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M4.22308 2.72608L4.47994 0.75H7.52195L7.77881 2.72608C7.91827 3.79896 7.08285 4.75 6.00094 4.75C4.91903 4.75 4.08362 3.79897 4.22308 2.72608Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Shop12;
