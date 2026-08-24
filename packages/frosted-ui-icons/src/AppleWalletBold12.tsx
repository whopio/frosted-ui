import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWalletBold12"
      {...props}
    >
      <path
        d="M9.5 1.25c1.657 0 3 1.343 3 3v3.5c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3v-3.5c0-1.657 1.343-3 3-3h6.5zM2 7.75c0 .552.448 1 1 1h6.5c.552 0 1-.448 1-1V7H9.02c-.051 0-.102.01-.149.028l-1.73.693c-.572.229-1.21.229-1.783 0l-1.73-.693C3.583 7.01 3.532 7 3.48 7H2v.75zm1-4.5c-.552 0-1 .448-1 1V5h1.48c.306 0 .609.058.892.172l1.73.691c.095.038.201.038.296 0l1.73-.691C8.41 5.058 8.714 5 9.02 5h1.48v-.75c0-.552-.448-1-1-1H3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

AppleWalletBold12.category = 'Money & Shopping';

export default AppleWalletBold12;
