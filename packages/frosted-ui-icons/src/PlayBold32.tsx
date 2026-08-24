import * as React from 'react';
import { IconProps } from './types';

export const PlayBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBold32"
      {...props}
    >
      <path
        d="M6.75 26.937V5.063c0-2.427 2.732-3.85 4.72-2.458l15.62 10.938c1.706 1.194 1.706 3.72 0 4.914L11.47 29.395c-1.988 1.392-4.72-.03-4.72-2.458z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold32.category = 'Sound & Music';

export default PlayBold32;
