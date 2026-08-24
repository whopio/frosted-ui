import * as React from 'react';
import { IconProps } from './types';

export const AppleWallet16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWallet16"
      {...props}
    >
      <path
        d="M11.85 2.5C13.59 2.5 15 3.91 15 5.65v4.7c0 1.74-1.41 3.15-3.15 3.15h-7.7C2.41 13.5 1 12.09 1 10.35v-4.7C1 3.91 2.41 2.5 4.15 2.5h7.7zM2.5 10.35c0 .91.74 1.65 1.65 1.65h7.7c.91 0 1.65-.74 1.65-1.65V8.5h-2.196c-.118 0-.233.032-.334.093L9.106 9.71c-.68.409-1.532.408-2.212 0L5.029 8.593c-.1-.06-.216-.093-.334-.093H2.5v1.85zM4.15 4c-.91 0-1.65.74-1.65 1.65V7h2.195c.39 0 .772.106 1.106.307l1.864 1.118c.206.123.463.123.669 0l1.863-1.118c.334-.2.717-.307 1.107-.307H13.5V5.65c0-.91-.74-1.65-1.65-1.65h-7.7z"
        fill={color}
      />
    </svg>
  );
};

AppleWallet16.category = 'Money & Shopping';

export default AppleWallet16;
