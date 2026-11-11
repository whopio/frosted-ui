import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarBoldFilled12"
      {...props}
    >
      <path
        d="M8.75 1C10.545 1 12 2.455 12 4.25v3.5C12 9.545 10.545 11 8.75 11h-5.5C1.455 11 0 9.545 0 7.75v-3.5C0 2.455 1.455 1 3.25 1h5.5zm-5.5 2C2.56 3 2 3.56 2 4.25v3.5C2 8.44 2.56 9 3.25 9H4V3h-.75z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarBoldFilled12.category = 'Layout';

export default CollapseSidebarBoldFilled12;
