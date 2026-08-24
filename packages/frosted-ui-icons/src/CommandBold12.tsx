import * as React from 'react';
import { IconProps } from './types';

export const CommandBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CommandBold12"
      {...props}
    >
      <path
        d="M4.25 4.25V2.625C4.25 1.728 3.522 1 2.625 1S1 1.728 1 2.625 1.728 4.25 2.625 4.25H4.25zm0 0v3.5m0-3.5h3.5m-3.5 3.5h3.5m-3.5 0H2.625C1.728 7.75 1 8.478 1 9.375 1 10.273 1.728 11 2.625 11s1.625-.727 1.625-1.625V7.75zm3.5 0v-3.5m0 3.5v1.625c0 .898.728 1.625 1.625 1.625.898 0 1.625-.727 1.625-1.625 0-.897-.727-1.625-1.625-1.625H7.75zm0-3.5V2.625C7.75 1.728 8.478 1 9.375 1 10.273 1 11 1.728 11 2.625S10.273 4.25 9.375 4.25H7.75z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandBold12.category = 'Interface General';

export default CommandBold12;
