import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWalletBoldFilled24"
      {...props}
    >
      <path
        d="M18.75 2.75c2.485 0 4.5 2.015 4.5 4.5v8.5c0 2.485-2.015 4.5-4.5 4.5H5.25c-2.485 0-4.5-2.015-4.5-4.5v-8.5c0-2.485 2.015-4.5 4.5-4.5h13.5zm-13.5 2c-1.38 0-2.5 1.12-2.5 2.5v4h3.74c.591 0 1.17.164 1.674.473l3.209 1.968c.385.237.87.237 1.255 0l3.209-1.968c.503-.31 1.083-.473 1.674-.473h3.739v-4c0-1.38-1.12-2.5-2.5-2.5H5.25z"
        fill={color}
      />
    </svg>
  );
};

AppleWalletBoldFilled24.category = 'Money & Shopping';

export default AppleWalletBoldFilled24;
