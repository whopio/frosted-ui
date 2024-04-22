import * as React from 'react';
import { IconProps } from './types';

export const LilstNumber24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.75 20.25H18.25C19.3546 20.25 20.25 19.3546 20.25 18.25V5.75C20.25 4.64543 19.3546 3.75 18.25 3.75H5.75C4.64543 3.75 3.75 4.64543 3.75 5.75V18.25C3.75 19.3546 4.64543 20.25 5.75 20.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8333 15.1667H17.5M11.8333 8.83335H17.5M8.16667 10.5V7.16669L6.5 8.33335M6.66667 13.9546C6.66667 13.9546 7.14915 13.5 7.73924 13.5C8.32933 13.5 8.80769 13.9146 8.80769 14.426C8.80769 15.6257 6.5 15.8334 6.5 16.8334H9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LilstNumber24;
