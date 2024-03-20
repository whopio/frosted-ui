import * as React from 'react';
import { IconProps } from './types';

export const Paypal20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.59924 16.177H4.6898C5.04223 16.177 5.34943 15.9371 5.43491 15.5952L6.29609 12.1505C6.38156 11.8086 6.68877 11.5687 7.04119 11.5687H7.97761C14.6085 11.5687 15.5305 7.4456 15.6435 6.69347C15.6552 6.61516 15.6651 6.53878 15.6739 6.46008C15.7499 5.78023 15.8929 2.35223 11.0498 2.35223H6.13765C5.41769 2.35223 4.79432 2.85228 4.63814 3.55509L1.99944 15.4292C1.91417 15.813 2.20616 16.177 2.59924 16.177Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.62259 16.1768L4.29351 17.74C4.21311 18.1218 4.50447 18.4809 4.89473 18.481L7.34804 18.4811C7.71416 18.4811 8.0294 18.2227 8.1012 17.8637L8.62228 15.2582C8.69407 14.8991 9.00929 14.6407 9.37541 14.6407H10.2818C16.8803 14.6407 17.8255 9.92969 17.946 9.02845C17.9592 8.92963 17.9722 8.83279 17.9827 8.73364C18.0429 8.16508 18.083 6.08863 15.6581 5.06516"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal20;
