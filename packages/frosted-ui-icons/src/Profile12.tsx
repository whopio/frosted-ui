import * as React from 'react';
import { IconProps } from './types';

export const Profile12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.87554 3.25C7.87554 4.28553 7.03609 5.125 6.00054 5.125 4.96501 5.125 4.12555 4.28553 4.12555 3.25 4.12555 2.21447 4.96501 1.375 6.00054 1.375 7.03609 1.375 7.87554 2.21447 7.87554 3.25zM6.00055 6.625C4.30498 6.625 3.01855 7.63215 2.4918 9.05645 2.2874 9.6091 2.75972 10.125 3.34898 10.125H8.65215C9.2414 10.125 9.7137 9.6091 9.5093 9.05645 8.98255 7.63215 7.69615 6.625 6.00055 6.625z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile12;
