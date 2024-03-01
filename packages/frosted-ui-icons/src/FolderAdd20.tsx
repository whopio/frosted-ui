import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.25 9.25V7.04C19.25 6.32755 18.6724 5.75 17.96 5.75H8.67304C8.25834 5.75 7.87696 5.52284 7.67944 5.1582L6.69556 3.3418C6.49804 2.97716 6.11666 2.75 5.70196 2.75H2.04C1.32755 2.75.75 3.32755.75 4.04V15.96C.75 16.6724 1.32755 17.25 2.04 17.25H11.25M12.75 14H19.25M16 17.25L16 10.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default FolderAdd20;
