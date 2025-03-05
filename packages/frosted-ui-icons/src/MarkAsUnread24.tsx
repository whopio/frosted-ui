import * as React from 'react';
import { IconProps } from './types';

export const MarkAsUnread24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13 5H22M2 13H22M2 21H22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 8L5.125 4.875M8.25 1.75L5.125 4.875M5.125 4.875L8.25 8M5.125 4.875L2 1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MarkAsUnread24;
