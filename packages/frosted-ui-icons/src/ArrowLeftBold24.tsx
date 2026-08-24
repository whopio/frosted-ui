import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBold24"
      {...props}
    >
      <path d="M10 20l-8-8 8-8m-8 8h20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowLeftBold24.category = 'Arrows';

export default ArrowLeftBold24;
