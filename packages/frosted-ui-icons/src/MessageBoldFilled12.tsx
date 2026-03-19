import * as React from 'react';
import { IconProps } from './types';

export const MessageBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C5.20108 11.9999 4.43782 11.8413 3.73926 11.5566C3.22736 11.6722 2.71101 11.7994 2.2627 11.917C0.949962 12.2615 -0.261629 11.0532 0.0820312 9.73926L0.0830078 9.73828C0.200465 9.2909 0.326747 8.77315 0.442383 8.25977C0.15808 7.56102 0 6.79799 0 6C0 2.68634 2.68659 0.000237465 6 0ZM4.25 4.75C3.55964 4.75 3 5.30964 3 6C3 6.69036 3.55964 7.25 4.25 7.25C4.94036 7.25 5.5 6.69036 5.5 6C5.5 5.30964 4.94036 4.75 4.25 4.75ZM7.75 4.75C7.05964 4.75 6.5 5.30964 6.5 6C6.5 6.69036 7.05964 7.25 7.75 7.25C8.44036 7.25 9 6.69036 9 6C9 5.30964 8.44036 4.75 7.75 4.75Z"
        fill={color}
      />
    </svg>
  );
};

MessageBoldFilled12.category = 'Communication';

export default MessageBoldFilled12;
