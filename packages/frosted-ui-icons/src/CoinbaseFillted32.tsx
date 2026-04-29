import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseFillted32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16.2236 5.5C10.3172 5.50025 5.5 10.1852 5.5 16C5.5 21.8148 10.3172 26.4998 16.2236 26.5C21.0261 26.5 25.1032 23.4067 26.4648 19.126C26.5904 18.7313 26.3722 18.3092 25.9775 18.1836C25.5829 18.0581 25.1608 18.2764 25.0352 18.6709C23.8716 22.3288 20.3731 25 16.2236 25C11.1134 24.9998 7 20.9544 7 16C7 11.0456 11.1134 7.00024 16.2236 7C20.3731 7 23.8716 9.67121 25.0352 13.3291C25.1608 13.7236 25.5829 13.9419 25.9775 13.8164C26.3722 13.6908 26.5904 13.2687 26.4648 12.874C25.1032 8.59335 21.0261 5.5 16.2236 5.5Z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseFillted32.category = 'Interface General';

export default CoinbaseFillted32;
