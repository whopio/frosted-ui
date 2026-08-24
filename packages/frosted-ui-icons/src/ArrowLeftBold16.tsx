import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBold16"
      {...props}
    >
      <path d="M7 13L2 8l5-5M2 8h12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowLeftBold16.category = 'Arrows';

export default ArrowLeftBold16;
