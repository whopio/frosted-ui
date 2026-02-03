import * as React from 'react';
import { IconProps } from './types';

export const CollapseSidebarFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.75 1.5C21.6495 1.5 24 3.85051 24 6.75V17.25C24 20.1495 21.6495 22.5 18.75 22.5H5.25C2.35051 22.5 2.59871e-07 20.1495 0 17.25V6.75C0 3.85051 2.35051 1.5 5.25 1.5H18.75ZM5.25 3C3.17893 3 1.5 4.67893 1.5 6.75V17.25C1.5 19.3211 3.17893 21 5.25 21H8V3H5.25Z"
        fill={color}
      />
    </svg>
  );
};

CollapseSidebarFilled24.category = 'Interface General';

export default CollapseSidebarFilled24;
