import * as React from 'react';
import { IconProps } from './types';

export const WalletBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WalletBoldFilled16"
      {...props}
    >
      <path
        d="M8.5 1.5C10.433 1.5 12 3.067 12 5v.035c1.696.243 3 1.702 3 3.465V11c0 1.933-1.567 3.5-3.5 3.5h-7C2.567 14.5 1 12.933 1 11V4.5c0-.04.002-.078.007-.116C1.005 4.339 1 4.294 1 4.25 1 2.731 2.231 1.5 3.75 1.5H8.5zm2.25 7c-.69 0-1.25.56-1.25 1.25S10.06 11 10.75 11 12 10.44 12 9.75s-.56-1.25-1.25-1.25zm-7-5c-.414 0-.75.336-.75.75s.336.75.75.75H10c0-.828-.672-1.5-1.5-1.5H3.75z"
        fill={color}
      />
    </svg>
  );
};

WalletBoldFilled16.category = 'Money & Shopping';

export default WalletBoldFilled16;
