import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRightBold32"
      {...props}
    >
      <path d="M8.5 28H28V8.5M28 28L4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowDownRightBold32.category = 'Arrows';

export default ArrowDownRightBold32;
