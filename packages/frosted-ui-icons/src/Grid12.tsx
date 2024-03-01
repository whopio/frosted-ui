import * as React from 'react';
import { IconProps } from './types';

export const Grid12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 1.86C.75 1.24696 1.24696.75 1.86.75H3.64C4.25304.75 4.75 1.24696 4.75 1.86V3.64C4.75 4.25304 4.25304 4.75 3.64 4.75H1.86C1.24696 4.75.75 4.25304.75 3.64V1.86zM.75 8.36C.75 7.74696 1.24696 7.25 1.86 7.25H3.64C4.25304 7.25 4.75 7.74696 4.75 8.36V10.14C4.75 10.753 4.25304 11.25 3.64 11.25H1.86C1.24696 11.25.75 10.753.75 10.14V8.36zM7.25 8.36C7.25 7.74696 7.74696 7.25 8.36 7.25H10.14C10.753 7.25 11.25 7.74696 11.25 8.36V10.14C11.25 10.753 10.753 11.25 10.14 11.25H8.36C7.74696 11.25 7.25 10.753 7.25 10.14V8.36zM7.25 1.86C7.25 1.24696 7.74696.75 8.36.75H10.14C10.753.75 11.25 1.24696 11.25 1.86V3.64C11.25 4.25304 10.753 4.75 10.14 4.75H8.36C7.74696 4.75 7.25 4.25304 7.25 3.64V1.86z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Grid12;
