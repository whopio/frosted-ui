import * as React from 'react';
import { IconProps } from './types';

export const CartRemove24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M21.25 5.75L19.8017 13.6123C19.6269 14.5612 18.7996 15.25 17.8348 15.25H7.63961C6.68625 15.25 5.86542 14.5771 5.67845 13.6422L3.74117 3.95583C3.60094 3.25469 2.98532 2.75 2.27029 2.75H1.75M10.4519 9.2981L12.75 7M12.75 7L15.0481 4.7019M12.75 7L10.4519 4.7019M12.75 7L15.0481 9.2981M9.25 19C9.25 19.6904 8.69036 20.25 8 20.25C7.30964 20.25 6.75 19.6904 6.75 19C6.75 18.3096 7.30964 17.75 8 17.75C8.69036 17.75 9.25 18.3096 9.25 19ZM18.25 19C18.25 19.6904 17.6904 20.25 17 20.25C16.3096 20.25 15.75 19.6904 15.75 19C15.75 18.3096 16.3096 17.75 17 17.75C17.6904 17.75 18.25 18.3096 18.25 19Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CartRemove24;
