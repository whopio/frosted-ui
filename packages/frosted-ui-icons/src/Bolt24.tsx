import * as React from 'react';
import { IconProps } from './types';

export const Bolt24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.4695 0.493177C12.0823 -0.378917 13.4998 0.0394327 13.4998 1.1465V8.50001H18.9265C19.9823 8.50042 20.6292 9.65833 20.076 10.5576L12.1658 23.4131C11.5475 24.4173 10.0002 23.9791 9.99979 22.7998V15.5H5.04569C4.00335 15.5 3.35393 14.3687 3.87967 13.4688L11.4129 0.581068L11.4695 0.493177ZM5.30643 14H10.1502C10.8955 14.0003 11.4998 14.6052 11.4998 15.3506V21.6328L18.658 10H13.3494C12.6042 9.9998 12.0001 9.39557 11.9998 8.6504V2.54884L5.30643 14Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Bolt24.category = 'Nature & Weather';

export default Bolt24;
