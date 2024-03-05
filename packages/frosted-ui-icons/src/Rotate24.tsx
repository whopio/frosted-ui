import * as React from 'react';
import { IconProps } from './types';

export const Rotate24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 10.25C1.75 8.25 4.09714 1.75 11.25 1.75C18.2761 1.75 20.9065 8.02159 20.9975 10.1395M22.25 3.75V8.75C22.25 9.57843 21.5784 10.25 20.75 10.25H15.75M22.25 13.75C22.25 15.75 19.9029 22.25 12.75 22.25C5.72394 22.25 3.09351 15.9784 3.00246 13.8605M1.75 20.25V15.25C1.75 14.4216 2.42157 13.75 3.25 13.75H8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Rotate24;
