import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeftBold12"
      {...props}
    >
      <path d="M8.5 10H2V3.5M2 10l8-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowDownLeftBold12.category = 'Arrows';

export default ArrowDownLeftBold12;
