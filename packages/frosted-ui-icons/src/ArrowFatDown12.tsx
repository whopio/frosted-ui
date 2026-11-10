import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDown12"
      {...props}
    >
      <path
        d="M3.75 1.5v4.05c0 .11-.09.2-.2.2H1.43c-.26 0-.397.31-.221.502l4.348 4.763c.238.26.648.26.886 0l4.348-4.763c.176-.192.04-.502-.221-.502H8.45c-.11 0-.2-.09-.2-.2V1.5c0-.414-.336-.75-.75-.75h-3c-.414 0-.75.336-.75.75z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDown12.category = 'Arrows';

export default ArrowFatDown12;
