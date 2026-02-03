import * as React from 'react';
import { IconProps } from './types';

export const Lightning16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.8877 0C11.694 0.000446818 12.2255 0.840847 11.8799 1.56934L10.0127 5.5H12.8086C13.7441 5.50038 14.2508 6.59615 13.6455 7.30957L6.60547 15.6035C5.88007 16.4581 4.49108 15.8048 4.68652 14.7012L5.6084 9.5H3.22949C2.48376 9.5 1.95491 8.77291 2.18457 8.06348L4.49805 0.920898L4.53516 0.819336C4.73999 0.32667 5.22317 0.000172152 5.76367 0H10.8877ZM3.78125 8H6.29492C6.86962 8.00029 7.30537 8.51999 7.20508 9.08594L6.42188 13.501L11.9404 7H9.10156C8.42279 7 7.97565 6.29283 8.2666 5.67969L10.252 1.5H5.88672L3.78125 8Z"
        fill={color}
      />
    </svg>
  );
};

Lightning16.category = 'Nature & Weather';

export default Lightning16;
