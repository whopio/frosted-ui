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
        d="M9 7c7.25 0 9 4.571 9 9.286C15.25 13.143 12.143 13 9 13v3.526c0 .267-.323.4-.512.212l-6.314-6.314c-.234-.234-.234-.614 0-.848l6.314-6.314c.189-.189.512-.055.512.212V7z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ReplyBold20.category = 'Arrows';

export default ReplyBold20;
