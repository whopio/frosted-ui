import * as React from 'react';
import { IconProps } from './types';

export const Code20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.12491 16.875L11.8749 3.125M15.2082 6.45833L17.4665 8.85775C18.0705 9.4995 18.0705 10.5005 17.4665 11.1422L15.2082 13.5417M4.79157 13.5417L2.53332 11.1422C1.92932 10.5005 1.92932 9.4995 2.53332 8.85775L4.79157 6.45833"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Code20;
