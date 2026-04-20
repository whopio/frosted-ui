import * as React from 'react';
import { IconProps } from './types';

export const WalletBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.5 2C13.5494 2.00011 15.2372 3.54165 15.4707 5.52832C17.458 5.76133 19 7.45015 19 9.5V14C19 16.2091 17.209 17.9999 15 18H5C2.79096 17.9999 1 16.2091 1 14V4.75C1 4.71375 1.00112 4.67783 1.00488 4.64258C1.06136 3.1737 2.26732 2.00011 3.75 2H11.5ZM13.75 10.25C12.9216 10.25 12.25 10.9216 12.25 11.75C12.25 12.5784 12.9216 13.25 13.75 13.25C14.5784 13.25 15.25 12.5784 15.25 11.75C15.25 10.9216 14.5784 10.25 13.75 10.25ZM3.75 4C3.33588 4.00011 3 4.33586 3 4.75C3 5.16414 3.33588 5.49989 3.75 5.5H13.4346C13.2123 4.63777 12.4316 4.0001 11.5 4H3.75Z"
        fill={color}
      />
    </svg>
  );
};

WalletBoldFilled20.category = 'Money & Shopping';

export default WalletBoldFilled20;
