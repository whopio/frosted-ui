import * as React from 'react';
import { IconProps } from './types';

export const Copy20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.25 11.14V3.36C8.25 2.47082 8.97082 1.75 9.86 1.75H16.64C17.5292 1.75 18.25 2.47082 18.25 3.36V11.14C18.25 12.0292 17.5292 12.75 16.64 12.75H9.86C8.97082 12.75 8.25 12.0292 8.25 11.14Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 7.25H3.36C2.47082 7.25 1.75 7.97082 1.75 8.86V16.64C1.75 17.5292 2.47082 18.25 3.36 18.25H10.14C11.0292 18.25 11.75 17.5292 11.75 16.64V15.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Copy20;
