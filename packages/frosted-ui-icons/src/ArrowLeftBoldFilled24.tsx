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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.001 19.7499L2.25098 12L10.001 4.25M2.25098 12H21.751"
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
