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
          d="M3.74994 20.25L20.2499 3.75M15.8421 4.62228C14.6736 4.08596 13.3878 3.75 12 3.75C5.5975 3.75 1.36585 10.8998 0.811902 11.8874C0.771358 11.9597 0.771358 12.0403 0.811902 12.1126C1.08163 12.5935 2.22331 14.5353 4.06297 16.4014M8.15777 19.3777C9.32626 19.914 10.6121 20.25 12 20.25C18.4024 20.25 22.6341 13.1002 23.188 12.1126C23.2285 12.0403 23.2285 11.9597 23.188 11.8874C22.9183 11.4065 21.7766 9.46465 19.9369 7.59856M16.2499 12C16.2499 14.3472 14.3471 16.25 11.9999 16.25C9.65273 16.25 7.74994 14.3472 7.74994 12C7.74994 9.65279 9.65273 7.75 11.9999 7.75C14.3471 7.75 16.2499 9.65279 16.2499 12Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default EyeSlashed24;
