import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarInvertedBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CollapseSidebarInvertedBold12"
      {...props}
    >
      <path
        d="M8.75 1C10.545 1 12 2.455 12 4.25v3.5C12 9.545 10.545 11 8.75 11h-5.5C1.455 11 0 9.545 0 7.75v-3.5C0 2.455 1.455 1 3.25 1h5.5zm-5.5 2C2.56 3 2 3.56 2 4.25v3.5C2 8.44 2.56 9 3.25 9h5.5C9.44 9 10 8.44 10 7.75v-3.5C10 3.56 9.44 3 8.75 3h-5.5zm1.5 1c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75h-1C3.336 8 3 7.664 3 7.25v-2.5c0-.414.336-.75.75-.75h1z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarInvertedBold12.category = 'Layout';

export default CollapseSidebarInvertedBold12;
