import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.19703 2H3.16667C1.41777 2 0 3.41776 0 5.16667V7H1.19703L6.19703 2ZM3.31835 7H6.82203L11.822 2H8.31835L3.31835 7ZM20 7H14.4513L18.7814 2.66991C19.5231 3.24947 20 4.15238 20 5.16667V7ZM16.8333 2C16.9906 2 17.1452 2.01147 17.2964 2.03361L12.33 7H8.94335L13.9434 2H16.8333ZM20 8.5H0V14.8333C0 16.5822 1.41776 18 3.16667 18H16.8333C18.5822 18 20 16.5822 20 14.8333V8.5ZM7.77283 15.4663V10.3489C7.77283 10.0968 8.04508 9.93874 8.26404 10.0637L12.7704 12.6351C12.9918 12.7615 12.9912 13.0809 12.7692 13.2063L8.26282 15.7523C8.04387 15.876 7.77283 15.7178 7.77283 15.4663Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default VideoFilled20;
