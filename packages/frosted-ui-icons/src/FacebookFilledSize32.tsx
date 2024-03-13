import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilledSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.7787 28.9413V20.0748H10.0269V16H12.7787V14.2444C12.7787 9.70591 14.832 7.60443 19.2854 7.60443C20.1284 7.60443 21.5839 7.76962 22.1818 7.9348V11.6259C21.8668 11.5941 21.3172 11.5778 20.6402 11.5778C18.4535 11.5778 17.6106 12.4044 17.6106 14.5592V16H21.9684L21.2218 20.0741H17.6166V29.2369C24.2183 28.4372 29.3334 22.816 29.3334 16C29.3334 8.63628 23.3638 2.66666 16 2.66666C8.63631 2.66666 2.66669 8.63628 2.66669 16C2.66669 22.2532 6.97086 27.5004 12.7787 28.9413Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilledSize32;
