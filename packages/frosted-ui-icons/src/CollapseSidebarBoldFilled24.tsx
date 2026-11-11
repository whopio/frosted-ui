import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarBoldFilled24"
      {...props}
    >
      <path
        d="M18.5 1.5C21.538 1.5 24 3.962 24 7v10c0 3.038-2.462 5.5-5.5 5.5h-13C2.462 22.5 0 20.038 0 17V7c0-3.038 2.462-5.5 5.5-5.5h13zm-13 2C3.567 3.5 2 5.067 2 7v10c0 1.933 1.567 3.5 3.5 3.5H8v-17H5.5z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarBoldFilled24.category = 'Layout';

export default CollapseSidebarBoldFilled24;
