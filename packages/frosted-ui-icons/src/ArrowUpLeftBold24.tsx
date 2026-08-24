import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeftBold24"
      {...props}
    >
      <path d="M15.5 3H3v12.5M3 3l18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowUpLeftBold24.category = 'Arrows';

export default ArrowUpLeftBold24;
