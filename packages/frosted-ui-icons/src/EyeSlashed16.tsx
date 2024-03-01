import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashed16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 14.25L14.25 1.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="8" r="3.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M10.2043 2.26023C9.5273 1.94262 8.79077 1.75 8.00006 1.75C3.82694 1.75 1.16307 7.11529 0.794143 7.90373C0.764477 7.96713 0.765874 8.03592 0.795565 8.09931C0.934034 8.39491 1.38563 9.31355 2.11074 10.3538M5.79583 13.7398C6.47283 14.0574 7.20935 14.25 8.00006 14.25C12.1732 14.25 14.837 8.88471 15.206 8.09627C15.2356 8.03287 15.2342 7.96408 15.2046 7.90069C15.0661 7.60509 14.6145 6.68645 13.8894 5.64621"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default EyeSlashed16;
