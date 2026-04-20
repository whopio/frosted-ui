import * as React from 'react';
import { IconProps } from './types';

export const WalletBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19 3.5C22.0376 3.5 24.5 5.96243 24.5 9H25.5C28.5376 9 31 11.4624 31 14.5V23C31 26.0376 28.5376 28.5 25.5 28.5H6.5C3.46243 28.5 1 26.0376 1 23V7C1 6.91005 1.01289 6.82315 1.03516 6.74023C1.28391 4.91035 2.85187 3.5 4.75 3.5H19ZM23.25 17C22.2835 17 21.5 17.7835 21.5 18.75C21.5 19.7165 22.2835 20.5 23.25 20.5C24.2165 20.5 25 19.7165 25 18.75C25 17.7835 24.2165 17 23.25 17ZM4.75 5.5C3.7835 5.5 3 6.2835 3 7.25C3 8.2165 3.7835 9 4.75 9H22.5C22.5 7.067 20.933 5.5 19 5.5H4.75Z"
        fill={color}
      />
    </svg>
  );
};

WalletBoldFilled32.category = 'Money & Shopping';

export default WalletBoldFilled32;
