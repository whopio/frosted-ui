import * as React from 'react';
import { IconProps } from './types';

export const Command16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Command16"
      {...props}
    >
      <path
        d="M5.75 5.75v-2c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2h2zm0 0v4.5m0-4.5h4.5m-4.5 4.5h4.5m-4.5 0h-2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2v-2zm4.5 0v-4.5m0 4.5v2c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2h-2zm0-4.5v-2c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2h-2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Command16.category = 'Interface General';

export default Command16;
