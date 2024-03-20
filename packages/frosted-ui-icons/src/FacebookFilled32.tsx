import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.7787 28.9413V20.0748H10.0268V16H12.7787V14.2444C12.7787 9.70591 14.832 7.60443 19.2853 7.60443C20.1284 7.60443 21.5838 7.76962 22.1817 7.9348V11.6259C21.8668 11.5941 21.3172 11.5778 20.6401 11.5778C18.4534 11.5778 17.6105 12.4044 17.6105 14.5592V16H21.9684L21.2217 20.0741H17.6165V29.2369C24.2182 28.4372 29.3333 22.816 29.3333 16C29.3333 8.63628 23.3637 2.66666 16 2.66666C8.63625 2.66666 2.66663 8.63628 2.66663 16C2.66663 22.2532 6.9708 27.5004 12.7787 28.9413Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled32;
