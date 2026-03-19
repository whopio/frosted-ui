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
      data-fui-icon="true"
      {...props}
    >
      <path d="M2 8L7 3M2 8L7 13M2 8H14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowLeftBold16.category = 'Arrows';

export default ArrowLeftBold16;
