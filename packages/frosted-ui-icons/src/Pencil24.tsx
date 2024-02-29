import * as React from 'react';
import { IconProps } from './types';

export const Pencil24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 22.2499L8.75 21.2499 21.1452 8.85478C21.8526 8.14736 22.25 7.1879 22.25 6.18746 22.25 5.18701 21.8526 4.22753 21.1451 3.52011L20.4798 2.85483C19.7724 2.14742 18.8129 1.75 17.8125 1.75 16.812 1.75 15.8525 2.14743 15.1451 2.85487L2.75 15.2499 1.75 22.2499zM12.625 5.625L18.375 11.375"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Pencil24;
