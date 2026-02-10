import * as React from 'react';
import { IconProps } from './types';

export const WalletFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.75 3.5C21.6495 3.5 24 5.85051 24 8.75V9H25.75C28.6495 9 31 11.3505 31 14.25V23.25C31 26.1495 28.6495 28.5 25.75 28.5H6.25C3.3506 28.4999 1 26.1494 1 23.25V7C1 5.067 2.567 3.5 4.5 3.5H18.75ZM23.5 17.25C22.6716 17.25 22 17.9216 22 18.75C22 19.5784 22.6716 20.25 23.5 20.25C24.3284 20.25 25 19.5784 25 18.75C25 17.9216 24.3284 17.25 23.5 17.25ZM4.5 5C3.39543 5 2.5 5.89543 2.5 7C2.5 8.10457 3.39543 9 4.5 9H22.5V8.75C22.5 6.67893 20.8211 5 18.75 5H4.5Z"
        fill={color}
      />
    </svg>
  );
};

WalletFilled32.category = 'Money & Shopping';

export default WalletFilled32;
