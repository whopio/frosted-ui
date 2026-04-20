import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.00098 1.00098C10.3146 1.00109 13.001 3.68734 13.001 7.00098C13.0009 8.20511 12.6439 9.32502 12.0332 10.2646L14.6338 12.8652C15.1219 13.3534 15.1219 14.1456 14.6338 14.6338C14.1456 15.1219 13.3534 15.1219 12.8652 14.6338L10.2646 12.0332C9.32502 12.6439 8.20511 13.0009 7.00098 13.001C3.68734 13.001 1.00109 10.3146 1.00098 7.00098C1.00098 3.68727 3.68727 1.00098 7.00098 1.00098ZM7.00098 3.50098C5.06798 3.50098 3.50098 5.06798 3.50098 7.00098C3.50109 8.93388 5.06805 10.501 7.00098 10.501C8.93381 10.5009 10.5009 8.93381 10.501 7.00098C10.501 5.06805 8.93388 3.50109 7.00098 3.50098Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassFilled16.category = 'Interface General';

export default MagnifyingGlassFilled16;
