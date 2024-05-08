import * as React from 'react';
import { IconProps } from './types';

export const SparkleFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.84744 1.83685C5.00993 1.33779 5.47515 1 6 1C6.52485 1 6.99007 1.33779 7.15255 1.83685L7.892 4.108L10.1631 4.84744C10.6622 5.00993 11 5.47515 11 6C11 6.52485 10.6622 6.99007 10.1631 7.15255L7.892 7.892L7.15255 10.1631C6.99007 10.6622 6.52485 11 6 11C5.47515 11 5.00993 10.6622 4.84745 10.1631L4.108 7.892L1.83685 7.15255C1.33779 6.99007 1 6.52485 1 6C1 5.47515 1.33779 5.00993 1.83685 4.84745L4.108 4.108L4.84744 1.83685Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default SparkleFilled12;
