import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownBold24"
      {...props}
    >
      <path d="M20 14l-8 8-8-8m8 8V2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowDownBold24.category = 'Arrows';

export default ArrowDownBold24;
