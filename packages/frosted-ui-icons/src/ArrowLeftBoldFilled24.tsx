import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBoldFilled24"
      {...props}
    >
      <path
        d="M10.001 19.75L2.251 12l7.75-7.75M2.251 12h19.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBoldFilled24.category = 'Arrows';

export default ArrowLeftBoldFilled24;
