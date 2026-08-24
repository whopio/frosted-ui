import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeftBold32"
      {...props}
    >
      <path d="M23.5 4H4v19.5M4 4l24 24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowUpLeftBold32.category = 'Arrows';

export default ArrowUpLeftBold32;
