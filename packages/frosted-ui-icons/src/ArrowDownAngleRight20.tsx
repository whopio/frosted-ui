import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.3125 13C2.03534 13 1 11.9647 1 10.6875V3.75C1 3.33579 1.33579 3 1.75 3C2.16421 3 2.5 3.33579 2.5 3.75V10.6875C2.5 11.1362 2.86377 11.5 3.3125 11.5H16.3534L13.737 9.04715C13.4349 8.76385 13.4195 8.28923 13.7028 7.98704C13.9861 7.68486 14.4608 7.66955 14.763 7.95285L18.763 11.7028C18.9142 11.8446 19 12.0427 19 12.25C19 12.4573 18.9142 12.6554 18.763 12.7972L14.763 16.5472C14.4608 16.8305 13.9861 16.8151 13.7028 16.513C13.4195 16.2108 13.4349 15.7361 13.737 15.4528L16.3534 13H3.3125Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ArrowDownAngleRight20;
