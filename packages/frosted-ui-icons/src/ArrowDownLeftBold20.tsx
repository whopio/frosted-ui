import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeftBold20"
      {...props}
    >
      <path d="M13.5 17H3V6.5M3 17L17 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowDownLeftBold20.category = 'Arrows';

export default ArrowDownLeftBold20;
