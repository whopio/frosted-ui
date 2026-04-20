import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.75 3C21.0972 3 23 4.90279 23 7.25V15.75C23 18.0972 21.0972 20 18.75 20H5.25C2.90279 20 1 18.0972 1 15.75V7.25C1 4.90279 2.90279 3 5.25 3H18.75ZM5.25 4.5C3.73122 4.5 2.5 5.73122 2.5 7.25V11.5H6.49023C7.03486 11.5 7.569 11.6507 8.0332 11.9355L11.2422 13.9043C11.7075 14.1898 12.2935 14.1898 12.7588 13.9043L15.9678 11.9355C16.432 11.6507 16.9662 11.5 17.5107 11.5H21.5V7.25C21.5 5.73122 20.2688 4.5 18.75 4.5H5.25Z"
        fill={color}
      />
    </svg>
  );
};

AppleWalletFilled24.category = 'Money & Shopping';

export default AppleWalletFilled24;
