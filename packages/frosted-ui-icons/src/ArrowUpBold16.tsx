import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path d="M8 2L3 7M8 2L13 7M8 2V14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowUpBold16.category = 'Arrows';

export default ArrowUpBold16;
