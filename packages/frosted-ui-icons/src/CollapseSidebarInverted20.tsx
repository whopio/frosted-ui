import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInverted20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.5 1.5C17.9853 1.5 20 3.51472 20 6V14C20 16.4853 17.9853 18.5 15.5 18.5H4.5C2.01472 18.5 6.44256e-08 16.4853 0 14V6C6.44266e-08 3.51472 2.01472 1.5 4.5 1.5H15.5ZM4.5 3C2.84315 3 1.5 4.34315 1.5 6V14C1.5 15.6569 2.84315 17 4.5 17H15.5C17.1569 17 18.5 15.6569 18.5 14V6C18.5 4.34315 17.1569 3 15.5 3H4.5ZM6.5 4.5C7.32843 4.5 8 5.17157 8 6V14C8 14.8284 7.32843 15.5 6.5 15.5H5C3.89543 15.5 3 14.6046 3 13.5V6.5C3 5.39543 3.89543 4.5 5 4.5H6.5Z"
        fill={color}
      />
    </svg>
  );
};

export default CollapseSidebarInverted20;
