import * as React from 'react';
import { IconProps } from './types';

export const TagBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagBoldFilled12"
      {...props}
    >
      <path
        d="M9.49575 0C10.8763 8.03931e-05 11.9955 1.11925 11.9955 2.4998V5.26129C11.9955 6.123 11.6528 6.94959 11.0435 7.55896L7.47931 11.1231C6.30776 12.2945 4.40887 12.2947 3.23747 11.1231L0.878286 8.76394C-0.292821 7.59256 -0.292702 5.69352 0.878286 4.52209L4.44733 0.952071C5.05673 0.342607 5.88411 5.77631e-05 6.74597 0H9.49575ZM7.50079 3.25462C6.8105 3.25462 6.2509 3.81422 6.2509 4.50452C6.25116 5.19459 6.81066 5.75441 7.50079 5.75441C8.19093 5.75441 8.75043 5.19459 8.75069 4.50452C8.75069 3.81422 8.19109 3.25462 7.50079 3.25462Z"
        fill={color}
      />
    </svg>
  );
};

TagBoldFilled12.category = 'Interface General';

export default TagBoldFilled12;
