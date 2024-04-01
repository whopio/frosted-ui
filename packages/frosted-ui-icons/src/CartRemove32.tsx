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
          d="M28.3333 7.66667L26.4022 18.1497C26.1692 19.4149 25.0661 20.3333 23.7797 20.3333H10.1861C8.91498 20.3333 7.82054 19.4361 7.57125 18.1896L4.98821 5.27445C4.80123 4.33959 3.98041 3.66667 3.02703 3.66667H2.33331M13.9358 12.3975L17 9.33334M17 9.33334L20.0641 6.26921M17 9.33334L13.9358 6.26921M17 9.33334L20.0641 12.3975M12.3333 25.3333C12.3333 26.2539 11.5871 27 10.6666 27C9.74617 27 8.99998 26.2539 8.99998 25.3333C8.99998 24.4128 9.74617 23.6667 10.6666 23.6667C11.5871 23.6667 12.3333 24.4128 12.3333 25.3333ZM24.3333 25.3333C24.3333 26.2539 23.5872 27 22.6666 27C21.7461 27 21 26.2539 21 25.3333C21 24.4128 21.7461 23.6667 22.6666 23.6667C23.5872 23.6667 24.3333 24.4128 24.3333 25.3333Z"
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
