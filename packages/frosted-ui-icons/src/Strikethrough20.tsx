import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.6482 5.71755C14.4392 4.71343 13.5657 2.29163 10.0014 2.29163C6.57547 2.29163 5.29076 4.51947 5.29076 6.14579C5.29076 8.67721 7.62876 9.33813 10.0014 9.97138M4.97395 14.2824C5.29449 15.2865 6.43704 17.7083 10.0014 17.7083C13.4273 17.7083 14.9262 15.4805 14.9262 13.8541C14.9262 13.2276 14.783 12.7158 14.5315 12.2905M2.29166 9.99996H17.7083"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough20;
