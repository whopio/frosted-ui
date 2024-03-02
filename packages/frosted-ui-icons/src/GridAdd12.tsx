import * as React from 'react';
import { IconProps } from './types';

export const GridAdd12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.25 9.25H7.25M9.25 11.25V7.25M1.86 4.75H3.64C4.25304 4.75 4.75 4.25304 4.75 3.64V1.86C4.75 1.24696 4.25304 0.75 3.64 0.75H1.86C1.24696 0.75 0.75 1.24696 0.75 1.86V3.64C0.75 4.25304 1.24696 4.75 1.86 4.75ZM1.86 11.25H3.64C4.25304 11.25 4.75 10.753 4.75 10.14V8.36C4.75 7.74696 4.25304 7.25 3.64 7.25H1.86C1.24696 7.25 0.75 7.74696 0.75 8.36V10.14C0.75 10.753 1.24696 11.25 1.86 11.25ZM8.36 4.75H10.14C10.753 4.75 11.25 4.25304 11.25 3.64V1.86C11.25 1.24696 10.753 0.75 10.14 0.75H8.36C7.74696 0.75 7.25 1.24696 7.25 1.86V3.64C7.25 4.25304 7.74696 4.75 8.36 4.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default GridAdd12;
