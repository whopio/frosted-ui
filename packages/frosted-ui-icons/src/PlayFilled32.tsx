import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 27.2332V4.76683C6.75 2.33882 9.48394 0.916579 11.4721 2.31033L27.4959 13.5435C29.1998 14.738 29.1998 17.262 27.4959 18.4565L11.4721 29.6897C9.48394 31.0834 6.75 29.6612 6.75 27.2332Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlayFilled32;
