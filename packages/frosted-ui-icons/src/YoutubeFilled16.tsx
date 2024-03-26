import * as React from 'react';
import { IconProps } from './types';

export const YoutubeFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4695 2.67182C14.0723 2.8584 14.5459 3.40615 14.7073 4.10315C14.9988 5.36522 15 7.99998 15 7.99998C15 7.99998 15 10.6348 14.7073 11.8968C14.5459 12.5938 14.0723 13.1416 13.4695 13.3281C12.3782 13.6666 8 13.6666 8 13.6666C8 13.6666 3.62183 13.6666 2.53045 13.3281C1.92773 13.1416 1.45407 12.5938 1.29272 11.8968C1 10.6348 1 7.99998 1 7.99998C1 7.99998 1 5.36522 1.29272 4.10315C1.45407 3.40615 1.92773 2.8584 2.53045 2.67182C3.62183 2.33331 8 2.33331 8 2.33331C8 2.33331 12.3782 2.33331 13.4695 2.67182ZM10.3423 8.00018L6.5319 10.1999V5.80041L10.3423 8.00018Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default YoutubeFilled16;
