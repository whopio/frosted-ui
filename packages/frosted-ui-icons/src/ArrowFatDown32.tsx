import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.9999 3.66663H12.9999C12.2635 3.66663 11.6666 4.26357 11.6666 4.99996V18.3333H7.12043C6.55015 18.3333 6.24314 19.0029 6.61526 19.435L14.9896 29.16C15.5215 29.7777 16.4783 29.7777 17.0103 29.16L25.3845 19.435C25.7567 19.0029 25.4497 18.3333 24.8793 18.3333H20.3332V4.99996C20.3332 4.26359 19.7363 3.66663 18.9999 3.66663Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown32;
