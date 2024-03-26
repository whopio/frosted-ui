import * as React from 'react';
import { IconProps } from './types';

export const MailOut16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.25 6.25V4.11C14.25 3.08275 13.4173 2.25 12.39 2.25H2.61C1.58275 2.25 0.75 3.08275 0.75 4.11V10.89C0.75 11.9172 1.58275 12.75 2.61 12.75H10.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M.75 4.5L6.02132 8.04865C6.45834 8.34285 6.97318 8.5 7.5 8.5V8.5C8.02682 8.5 8.54166 8.34285 8.97868 8.04865L14.25 4.5M13 8.125L15.25 10.25 13 12.375M10 10.25H15.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MailOut16;
