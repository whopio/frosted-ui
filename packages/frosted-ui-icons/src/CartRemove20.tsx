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
          d="M17.7083 4.79167L16.5014 11.3436C16.3558 12.1343 15.6663 12.7083 14.8623 12.7083H6.36635C5.57188 12.7083 4.88786 12.1476 4.73205 11.3685L3.11765 3.29653C3.00079 2.71225 2.48778 2.29167 1.89192 2.29167H1.45834M8.70993 7.74842L10.625 5.83334M10.625 5.83334L12.5401 3.91826M10.625 5.83334L8.70993 3.91826M10.625 5.83334L12.5401 7.74842M7.70834 15.8333C7.70834 16.4087 7.24198 16.875 6.66668 16.875C6.09138 16.875 5.62501 16.4087 5.62501 15.8333C5.62501 15.258 6.09138 14.7917 6.66668 14.7917C7.24198 14.7917 7.70834 15.258 7.70834 15.8333ZM15.2083 15.8333C15.2083 16.4087 14.742 16.875 14.1667 16.875C13.5913 16.875 13.125 16.4087 13.125 15.8333C13.125 15.258 13.5913 14.7917 14.1667 14.7917C14.742 14.7917 15.2083 15.258 15.2083 15.8333Z"
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
