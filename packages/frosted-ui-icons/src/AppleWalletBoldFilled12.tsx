import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWalletBoldFilled12"
      {...props}
    >
      <path
        d="M9.5 1.25c1.657 0 3 1.343 3 3v3.5c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3v-3.5c0-1.657 1.343-3 3-3h6.5zm-6.5 2c-.552 0-1 .448-1 1V5h1.48c.306 0 .609.058.892.172l1.73.691c.095.038.201.038.296 0l1.73-.691C8.41 5.058 8.714 5 9.02 5h1.48v-.75c0-.552-.448-1-1-1H3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

AppleWalletBoldFilled12.category = 'Money & Shopping';

export default AppleWalletBoldFilled12;
