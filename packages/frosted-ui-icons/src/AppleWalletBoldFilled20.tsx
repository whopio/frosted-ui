import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWalletBoldFilled20"
      {...props}
    >
      <path
        d="M15.25 2.75c2.21 0 4 1.79 4 4v6.5c0 2.21-1.79 4-4 4H4.75c-2.21 0-4-1.79-4-4v-6.5c0-2.21 1.79-4 4-4h10.5zm-10.5 2c-1.105 0-2 .895-2 2v2H5.4c.606 0 1.196.196 1.68.56l2.44 1.83c.284.213.676.213.96 0l2.44-1.83c.485-.364 1.074-.56 1.68-.56h2.65v-2c0-1.105-.895-2-2-2H4.75z"
        fill={color}
      />
    </svg>
  );
};

AppleWalletBoldFilled20.category = 'Money & Shopping';

export default AppleWalletBoldFilled20;
