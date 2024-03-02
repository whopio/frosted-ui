import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M3.5 5.32C3.5 4.31484 4.31484 3.5 5.32 3.5H18.68C19.6852 3.5 20.5 4.31484 20.5 5.32V18.68C20.5 19.6852 19.6852 20.5 18.68 20.5H5.32C4.31484 20.5 3.5 19.6852 3.5 18.68V5.32ZM5.32 2C3.48641 2 2 3.48641 2 5.32V18.68C2 20.5136 3.48642 22 5.32 22H18.68C20.5136 22 22 20.5136 22 18.68V5.32C22 3.48641 20.5136 2 18.68 2H5.32ZM13 7.00403C13 7.55631 12.5523 8.00403 12 8.00403C11.4477 8.00403 11 7.55631 11 7.00403C11 6.45174 11.4477 6.00403 12 6.00403C12.5523 6.00403 13 6.45174 13 7.00403ZM9.75 9C9.33579 9 9 9.33579 9 9.75C9 10.1642 9.33579 10.5 9.75 10.5H11.25V16.4999H9.75C9.33579 16.4999 9 16.8357 9 17.2499C9 17.6641 9.33579 17.9999 9.75 17.9999H11.9941L12 17.9999L12.0059 17.9999H14.2499C14.6641 17.9999 14.9999 17.6641 14.9999 17.2499C14.9999 16.8357 14.6641 16.4999 14.2499 16.4999H12.75V9.75C12.75 9.33579 12.4142 9 12 9H9.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoSquare24;
