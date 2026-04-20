import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26 4C28.7614 4 31 6.23858 31 9V22C31 24.7614 28.7614 27 26 27H6C3.23858 27 1 24.7614 1 22V9C1 6.23858 3.23858 4 6 4H26ZM6 5.5C4.067 5.5 2.5 7.067 2.5 9V15.5H8.20312C8.85563 15.5 9.49692 15.6704 10.0635 15.9941L14.8838 18.748C15.5755 19.1433 16.4245 19.1433 17.1162 18.748L21.9365 15.9941C22.5031 15.6704 23.1444 15.5 23.7969 15.5H29.5V9C29.5 7.067 27.933 5.5 26 5.5H6Z"
        fill={color}
      />
    </svg>
  );
};

AppleWalletFilled32.category = 'Money & Shopping';

export default AppleWalletFilled32;
