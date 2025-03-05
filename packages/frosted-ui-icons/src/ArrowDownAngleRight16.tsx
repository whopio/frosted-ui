import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_882_1440)">
        <path
          d="M2 11C0.895431 11 0 10.1046 0 9V2.75C0 2.33579 0.335787 2 0.75 2C1.16421 2 1.5 2.33579 1.5 2.75V9C1.5 9.27614 1.72386 9.5 2 9.5H13.3004L11.2345 7.54472C10.9336 7.26 10.9206 6.7853 11.2053 6.48446C11.49 6.18362 11.9647 6.17056 12.2655 6.45528L15.7655 9.76778C15.917 9.91115 16.002 10.1111 16 10.3197C15.998 10.5283 15.9092 10.7266 15.755 10.867L12.255 14.0545C11.9488 14.3334 11.4744 14.3112 11.1955 14.005C10.9166 13.6988 10.9388 13.2244 11.245 12.9455L13.3812 11H2Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_1440">
          <path
            fill={color}
            transform="matrix(-1 0 0 1 16 0)"
            d="M0 0H16V16H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDownAngleRight16;
