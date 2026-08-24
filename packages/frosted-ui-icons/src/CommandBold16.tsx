import * as React from 'react';
import { IconProps } from './types';

export const CommandBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CommandBold16"
      {...props}
    >
      <path
        d="M6 6V4c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2h2zm0 0v4m0-4h4m-4 4h4m-4 0H4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2v-2zm4 0V6m0 4v2c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2h-2zm0-4V4c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2h-2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandBold16.category = 'Interface General';

export default CommandBold16;
