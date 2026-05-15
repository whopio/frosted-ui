import * as React from 'react';
import { IconProps } from './types';

export const BarGraphBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.5 12C6.60457 12 7.5 12.8954 7.5 14V21C7.5 22.1046 6.60457 23 5.5 23H3C1.89543 23 1 22.1046 1 21V14C1 12.8954 1.89543 12 3 12H5.5ZM13.25 1C14.3546 1 15.25 1.89543 15.25 3V21C15.25 22.1046 14.3546 23 13.25 23H10.75C9.64543 23 8.75 22.1046 8.75 21V3C8.75 1.89543 9.64543 1 10.75 1H13.25ZM21 7C22.1046 7 23 7.89543 23 9V21C23 22.1046 22.1046 23 21 23H18.5C17.3954 23 16.5 22.1046 16.5 21V9C16.5 7.89543 17.3954 7 18.5 7H21Z"
        fill={color}
      />
    </svg>
  );
};

BarGraphBoldFilled24.category = 'Stats & Charts';

export default BarGraphBoldFilled24;
