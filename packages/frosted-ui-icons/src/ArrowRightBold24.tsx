import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRightBold24"
      {...props}
    >
      <path d="M14 20l8-8-8-8m8 8H2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowRightBold24.category = 'Arrows';

export default ArrowRightBold24;
