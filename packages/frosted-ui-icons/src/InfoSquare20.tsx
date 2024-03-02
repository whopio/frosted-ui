import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M2.5 4.32C2.5 3.31484 3.31484 2.5 4.32 2.5H15.68C16.6852 2.5 17.5 3.31484 17.5 4.32V15.68C17.5 16.6852 16.6852 17.5 15.68 17.5H4.32C3.31484 17.5 2.5 16.6852 2.5 15.68V4.32ZM4.32 1C2.48641 1 1 2.48641 1 4.32V15.68C1 17.5136 2.48641 19 4.32 19H15.68C17.5136 19 19 17.5136 19 15.68V4.32C19 2.48641 17.5136 1 15.68 1H4.32ZM11 6.00403C11 6.55631 10.5523 7.00403 10 7.00403C9.44771 7.00403 9 6.55631 9 6.00403C9 5.45174 9.44771 5.00403 10 5.00403C10.5523 5.00403 11 5.45174 11 6.00403ZM7.75 8C7.33579 8 7 8.33579 7 8.75C7 9.16421 7.33579 9.5 7.75 9.5H9.25V13.4999H7.75C7.33579 13.4999 7 13.8357 7 14.2499C7 14.6641 7.33579 14.9999 7.75 14.9999H9.99408L10 14.9999L10.0059 14.9999H12.2499C12.6641 14.9999 12.9999 14.6641 12.9999 14.2499C12.9999 13.8357 12.6641 13.4999 12.2499 13.4999H10.75V8.75C10.75 8.33579 10.4142 8 10 8H7.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoSquare20;
