import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.75 12.25V8.22C22.75 7.40814 22.0919 6.75 21.28 6.75H10.6619C10.2468 6.75 9.85737 6.54865 9.6174 6.20986L8.2576 4.29014C8.01763 3.95135 7.62825 3.75 7.21309 3.75H2.72C1.90814 3.75 1.25 4.40814 1.25 5.22V18.75C1.25 19.5784 1.92157 20.25 2.75 20.25H15.25M16.75 17H23.25M20 20.25L20 13.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default FolderAdd24;
