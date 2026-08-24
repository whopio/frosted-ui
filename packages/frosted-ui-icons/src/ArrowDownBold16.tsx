import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownBold16"
      {...props}
    >
      <path d="M13 9l-5 5-5-5m5 5V2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowDownBold16.category = 'Arrows';

export default ArrowDownBold16;
