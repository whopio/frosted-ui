import * as React from 'react';
import { IconProps } from './types';

export const MarkAsUnread16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M10 4H14M2 9H14M2 14H14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 6L4.125 3.875M6.25 1.75L4.125 3.875M4.125 3.875L6.25 6M4.125 3.875L2 1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MarkAsUnread16;
