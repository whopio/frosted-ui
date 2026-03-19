import * as React from 'react';
import { IconProps } from './types';

export const MessageFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C5.16787 11.9999 4.37469 11.8286 3.65332 11.5215C3.05527 11.6546 2.44801 11.8051 1.93457 11.9404C0.805458 12.2381 -0.238332 11.1948 0.0595703 10.0654C0.195167 9.55135 0.345177 8.9428 0.478516 8.34375C0.172136 7.62313 0 6.83127 0 6C0 2.68637 2.68659 0.000260234 6 0ZM4.5 5C3.94772 5 3.5 5.44772 3.5 6C3.5 6.55228 3.94772 7 4.5 7C5.05228 7 5.5 6.55228 5.5 6C5.5 5.44772 5.05228 5 4.5 5ZM7.5 5C6.94772 5 6.5 5.44772 6.5 6C6.5 6.55228 6.94772 7 7.5 7C8.05229 7 8.5 6.55228 8.5 6C8.5 5.44772 8.05229 5 7.5 5Z"
        fill={color}
      />
    </svg>
  );
};

MessageFilled12.category = 'Communication';

export default MessageFilled12;
