import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.50439 7.25H14.1206C15.4323 7.25 16.4956 8.31332 16.4956 9.625C16.4956 10.9367 15.4323 12 14.1206 12M14.1206 12H9.12281M14.1206 12C15.4323 12 16.4956 13.0633 16.4956 14.375C16.4956 15.6867 15.4323 16.75 14.1206 16.75H7.50439M9.00236 7.32446L9.03081 16.6755M9.99999 5.75V7.25M9.99999 16.75V18.25M14 5.75V7.25M14 16.75V18.25M22.25 12C22.25 17.6609 17.6609 22.25 12 22.25C6.33908 22.25 1.75 17.6609 1.75 12C1.75 6.33908 6.33908 1.75 12 1.75C17.6609 1.75 22.25 6.33908 22.25 12Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bitcoin24;
