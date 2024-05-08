import * as React from 'react';
import { IconProps } from './types';

export const ListBullet20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9.79167 13.9583H16.875M9.79167 6.04167H16.875M6.45833 6.04167C6.45833 6.96214 5.71214 7.70833 4.79167 7.70833C3.87119 7.70833 3.125 6.96214 3.125 6.04167C3.125 5.12119 3.87119 4.375 4.79167 4.375C5.71214 4.375 6.45833 5.12119 6.45833 6.04167ZM6.45833 13.9583C6.45833 14.8788 5.71214 15.625 4.79167 15.625C3.87119 15.625 3.125 14.8788 3.125 13.9583C3.125 13.0378 3.87119 12.2917 4.79167 12.2917C5.71214 12.2917 6.45833 13.0378 6.45833 13.9583Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ListBullet20;
