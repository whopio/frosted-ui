import * as React from 'react';
import { IconProps } from './types';

export const ReplyBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReplyBold20"
      {...props}
    >
      <path
        d="M18 16.286C18 11.57 16.25 7 9 7V3.474c0-.267-.323-.4-.512-.212L2.174 9.576c-.234.234-.234.614 0 .848l6.314 6.314c.189.189.512.055.512-.212V13c3.143 0 6.25.143 9 3.286z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBold20.category = 'Arrows';

export default ReplyBold20;
