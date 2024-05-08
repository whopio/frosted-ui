import * as React from 'react';
import { IconProps } from './types';

export const Youtube16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4695 2.67188C14.0723 2.85846 14.5459 3.40621 14.7073 4.10321C14.9988 5.36528 15 8.00004 15 8.00004C15 8.00004 15 10.6348 14.7073 11.8969C14.5459 12.5939 14.0723 13.1416 13.4695 13.3282C12.3782 13.6667 8 13.6667 8 13.6667C8 13.6667 3.62183 13.6667 2.53045 13.3282C1.92773 13.1416 1.45407 12.5939 1.29272 11.8969C1 10.6348 1 8.00004 1 8.00004C1 8.00004 1 5.36528 1.29272 4.10321C1.45407 3.40621 1.92773 2.85846 2.53045 2.67188C3.62183 2.33337 8 2.33337 8 2.33337C8 2.33337 12.3782 2.33337 13.4695 2.67188ZM10.0922 7.8559C10.2034 7.92005 10.2034 8.08043 10.0922 8.14458L6.78189 10.0557C6.67078 10.1198 6.5319 10.0396 6.5319 9.91131V6.08914C6.5319 5.96084 6.67078 5.88065 6.7819 5.9448L10.0922 7.8559Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Youtube16;
