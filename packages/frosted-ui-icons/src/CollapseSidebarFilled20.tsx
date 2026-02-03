import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.5 1.5C17.9853 1.5 20 3.51472 20 6V14C20 16.4853 17.9853 18.5 15.5 18.5H4.5C2.01472 18.5 6.44256e-08 16.4853 0 14V6C6.44266e-08 3.51472 2.01472 1.5 4.5 1.5H15.5ZM4.5 3C2.84315 3 1.5 4.34315 1.5 6V14C1.5 15.6569 2.84315 17 4.5 17H7V3H4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default CollapseSidebarFilled20;
