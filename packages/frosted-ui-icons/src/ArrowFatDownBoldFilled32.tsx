import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24.0001 15H28.045C29.6216 15 30.4342 16.8853 29.3517 18.0312L17.8849 30.1611C16.8613 31.2439 15.1379 31.244 14.1144 30.1611L2.64854 18.0312C1.56596 16.8853 2.37858 15 3.95519 15H8.00011V3.99316C8.00011 2.3403 9.34041 1 10.9933 1H21.0069C22.6598 1 24.0001 2.3403 24.0001 3.99316V15Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDownBoldFilled32.category = 'Arrows';

export default ArrowFatDownBoldFilled32;
