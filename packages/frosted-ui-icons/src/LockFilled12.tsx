import * as React from 'react';
import { IconProps } from './types';

export const LockFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.75 4C4.75 3.30964 5.30964 2.75 6 2.75C6.69036 2.75 7.25 3.30964 7.25 4V5.25H4.75V4ZM3.25 5.26164V4C3.25 2.48122 4.48122 1.25 6 1.25C7.51878 1.25 8.75 2.48122 8.75 4V5.26164C9.59463 5.36063 10.25 6.07878 10.25 6.95V9.55C10.25 10.4889 9.48888 11.25 8.55 11.25H3.45C2.51112 11.25 1.75 10.4889 1.75 9.55V6.95C1.75 6.07878 2.40537 5.36063 3.25 5.26164Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default LockFilled12;
