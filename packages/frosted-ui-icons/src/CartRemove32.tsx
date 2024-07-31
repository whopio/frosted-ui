import * as React from 'react';
import { IconProps } from './types';

export const CartRemove32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M28.3334 7.66669L26.4023 18.1498C26.1692 19.415 25.0662 20.3334 23.7798 20.3334H10.1862C8.91504 20.3334 7.8206 19.4362 7.57131 18.1896L4.98827 5.27446C4.80129 4.33961 3.98047 3.66669 3.02709 3.66669H2.33337M13.9359 12.3975L17 9.33335M17 9.33335L20.0642 6.26922M17 9.33335L13.9359 6.26922M17 9.33335L20.0642 12.3975M12.3334 25.3334C12.3334 26.2539 11.5872 27 10.6667 27C9.74623 27 9.00004 26.2539 9.00004 25.3334C9.00004 24.4128 9.74623 23.6667 10.6667 23.6667C11.5872 23.6667 12.3334 24.4128 12.3334 25.3334ZM24.3334 25.3334C24.3334 26.2539 23.5872 27 22.6667 27C21.7462 27 21 26.2539 21 25.3334C21 24.4128 21.7462 23.6667 22.6667 23.6667C23.5872 23.6667 24.3334 24.4128 24.3334 25.3334Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CartRemove32;
