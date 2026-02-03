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
        d="M27.123 5.93652C29.5323 8.5978 31 12.1274 31 16C31 24.2843 24.2843 31 16 31C12.1274 31 8.5978 29.5323 5.93652 27.123L27.123 5.93652ZM16 1C19.8721 1 23.4013 2.46728 26.0625 4.87598L4.87598 26.0625C2.46728 23.4013 1 19.8721 1 16C1 7.71573 7.71573 1 16 1Z"
        fill={color}
      />
    </svg>
  );
};

BanFilled32.category = 'Interface General';

export default BanFilled32;
