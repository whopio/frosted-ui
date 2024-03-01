import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashed24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.75 20.25L20.25 3.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M15.8422 4.62228C14.6737 4.08596 13.3879 3.75 12 3.75C5.59756 3.75 1.36591 10.8998 0.811963 11.8874C0.771419 11.9597 0.771419 12.0403 0.811963 12.1126C1.08169 12.5935 2.22337 14.5353 4.06304 16.4014M8.15783 19.3777C9.32633 19.914 10.6122 20.25 12 20.25C18.4025 20.25 22.6341 13.1002 23.1881 12.1126C23.2286 12.0403 23.2286 11.9597 23.1881 11.8874C22.9183 11.4065 21.7767 9.46465 19.937 7.59856"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default EyeSlashed24;
