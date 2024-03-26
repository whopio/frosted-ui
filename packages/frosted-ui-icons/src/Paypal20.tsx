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
          d="M2.59927 16.177H4.68983C5.04226 16.177 5.34946 15.9371 5.43494 15.5952L6.29612 12.1505C6.38159 11.8086 6.6888 11.5687 7.04123 11.5687H7.97764C14.6085 11.5687 15.5305 7.44561 15.6435 6.69348C15.6553 6.61517 15.6652 6.53879 15.674 6.46009C15.7499 5.78024 15.893 2.35224 11.0498 2.35224H6.13768C5.41772 2.35224 4.79435 2.85229 4.63817 3.5551L1.99947 15.4293C1.9142 15.813 2.20619 16.177 2.59927 16.177Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.62259 16.1768L4.29351 17.74C4.21311 18.1219 4.50447 18.481 4.89473 18.481L7.34804 18.4811C7.71416 18.4811 8.0294 18.2227 8.1012 17.8637L8.62228 15.2582C8.69407 14.8992 9.00929 14.6407 9.37541 14.6407H10.2818C16.8803 14.6407 17.8255 9.9297 17.946 9.02846C17.9592 8.92963 17.9722 8.8328 17.9827 8.73365C18.0429 8.16509 18.083 6.08863 15.6581 5.06516"
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
