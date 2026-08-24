import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeftBoldFilled24"
      {...props}
    >
      <path
        d="M16.25 20.75h-13v-13m0 13l17.5-17.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftBoldFilled24.category = 'Arrows';

export default ArrowDownLeftBoldFilled24;
