import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16ZM14 14.5V23.4999H12.75C12.3358 23.4999 12 23.8357 12 24.2499C12 24.6641 12.3358 24.9999 12.75 24.9999H14.7441L14.75 24.9999L14.7559 24.9999H18.2441L18.25 24.9999L18.2559 24.9999H20.25C20.6642 24.9999 21 24.6641 21 24.2499C21 23.8357 20.6642 23.4999 20.25 23.4999H19V13.75C19 13.3358 18.6642 13 18.25 13H14.75H12.75C12.3358 13 12 13.3358 12 13.75C12 14.1642 12.3358 14.5 12.75 14.5H14ZM17.5 14.5V23.4999H15.5V14.5H17.5ZM15.5 9.50403C15.5 8.95174 15.9477 8.50403 16.5 8.50403C17.0523 8.50403 17.5 8.95174 17.5 9.50403C17.5 10.0563 17.0523 10.504 16.5 10.504C15.9477 10.504 15.5 10.0563 15.5 9.50403ZM16.5 7.00403C15.1193 7.00403 14 8.12332 14 9.50403C14 10.8847 15.1193 12.004 16.5 12.004C17.8807 12.004 19 10.8847 19 9.50403C19 8.12332 17.8807 7.00403 16.5 7.00403Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default InfoCircleFilled32;
