import * as React from 'react';
import { IconProps } from './types';

export const WalletBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WalletBold20"
      {...props}
    >
      <path
        d="M11.5 2c2.05 0 3.737 1.542 3.97 3.528C17.459 5.761 19 7.45 19 9.5V14c0 2.21-1.79 4-4 4H5c-2.209 0-4-1.79-4-4V4.75c0-.036.001-.072.005-.107C1.06 3.173 2.267 2 3.75 2h7.75zM3 14c0 1.104.896 2 2 2h10c1.105 0 2-.895 2-2V9.5c0-1.105-.895-2-2-2H3.75c-.26 0-.511-.04-.75-.107V14zm10.75-3.75c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM3.75 4c-.414 0-.75.336-.75.75s.336.75.75.75h9.685C13.212 4.638 12.432 4 11.5 4H3.75z"
        fill={color}
      />
    </svg>
  );
};

WalletBold20.category = 'Money & Shopping';

export default WalletBold20;
