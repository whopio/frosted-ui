import * as React from 'react';
import { IconProps } from './types';

export const Youtube16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4695 2.67182C14.0723 2.8584 14.5459 3.40615 14.7073 4.10315C14.9988 5.36522 15 7.99998 15 7.99998C15 7.99998 15 10.6348 14.7073 11.8968C14.5459 12.5938 14.0723 13.1416 13.4695 13.3281C12.3782 13.6666 8 13.6666 8 13.6666C8 13.6666 3.62183 13.6666 2.53045 13.3281C1.92773 13.1416 1.45407 12.5938 1.29272 11.8968C1 10.6348 1 7.99998 1 7.99998C1 7.99998 1 5.36522 1.29272 4.10315C1.45407 3.40615 1.92773 2.8584 2.53045 2.67182C3.62183 2.33331 8 2.33331 8 2.33331C8 2.33331 12.3782 2.33331 13.4695 2.67182ZM10.0922 7.85584C10.2034 7.91999 10.2034 8.08037 10.0922 8.14452L6.78189 10.0556C6.67078 10.1197 6.5319 10.0395 6.5319 9.91125V6.08908C6.5319 5.96078 6.67078 5.88059 6.7819 5.94474L10.0922 7.85584Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Youtube16;
