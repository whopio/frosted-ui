import * as React from 'react';
import { IconProps } from './types';

export const CartRemove20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.7084 4.79169L16.5015 11.3436C16.3558 12.1344 15.6664 12.7084 14.8624 12.7084H6.36638C5.57192 12.7084 4.88789 12.1476 4.73208 11.3685L3.11768 3.29655C3.00082 2.71226 2.48781 2.29169 1.89195 2.29169H1.45837M8.70996 7.74844L10.625 5.83335M10.625 5.83335L12.5401 3.91827M10.625 5.83335L8.70996 3.91827M10.625 5.83335L12.5401 7.74844M7.70837 15.8334C7.70837 16.4087 7.24201 16.875 6.66671 16.875C6.09141 16.875 5.62504 16.4087 5.62504 15.8334C5.62504 15.258 6.09141 14.7917 6.66671 14.7917C7.24201 14.7917 7.70837 15.258 7.70837 15.8334ZM15.2084 15.8334C15.2084 16.4087 14.742 16.875 14.1667 16.875C13.5914 16.875 13.125 16.4087 13.125 15.8334C13.125 15.258 13.5914 14.7917 14.1667 14.7917C14.742 14.7917 15.2084 15.258 15.2084 15.8334Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CartRemove20;
