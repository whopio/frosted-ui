import * as React from 'react';
import { IconProps } from './types';

export const MessageFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 1C11.8658 1.00018 15 4.13407 15 8C15 11.8659 11.8658 14.9998 8 15C7.01286 15 6.07243 14.7929 5.21875 14.4229C4.94043 14.4845 4.65975 14.5479 4.38477 14.6143L3.37207 14.8682C2.02473 15.2179 0.782207 13.9729 1.13184 12.627C1.2794 12.0589 1.43583 11.4139 1.57617 10.7793C1.20661 9.92605 1 8.98645 1 8C1 4.13401 4.13401 1 8 1ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9C5.55228 9 6 8.55228 6 8C6 7.44772 5.55228 7 5 7ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7Z"
        fill={color}
      />
    </svg>
  );
};

MessageFilled16.category = 'Communication';

export default MessageFilled16;
