import * as React from 'react';
import { IconProps } from './types';

export const BanFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M27.4775 5.58203C29.9771 8.33415 31.5 11.9893 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C11.9893 31.5 8.33415 29.9771 5.58203 27.4775L27.4775 5.58203ZM16 0.5C20.0102 0.5 23.665 2.02249 26.417 4.52148L4.52148 26.417C2.02249 23.665 0.5 20.0102 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5Z"
        fill={color}
      />
    </svg>
  );
};

BanFilled32.category = 'Interface General';

export default BanFilled32;
