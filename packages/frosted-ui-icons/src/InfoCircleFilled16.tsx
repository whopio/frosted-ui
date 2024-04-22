import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.75 7C6.33579 7 6 7.33579 6 7.75C6 8.16421 6.33579 8.5 6.75 8.5H7.25V10.4999H6.75C6.33579 10.4999 6 10.8357 6 11.2499C6 11.6641 6.33579 11.9999 6.75 11.9999H7.99408L8 11.9999L8.00592 11.9999H9.2499C9.66411 11.9999 9.9999 11.6641 9.9999 11.2499C9.9999 10.8357 9.66411 10.4999 9.2499 10.4999H8.75V7.75C8.75 7.33579 8.41421 7 8 7H6.75ZM8 6.00403C8.55229 6.00403 9 5.55631 9 5.00403C9 4.45174 8.55229 4.00403 8 4.00403C7.44772 4.00403 7 4.45174 7 5.00403C7 5.55631 7.44772 6.00403 8 6.00403Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default InfoCircleFilled16;
