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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.00049 11.9999L10.0005 4M2.00049 11.9999L10.0005 20M2.00049 11.9999H22.0005"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBold24.category = 'Arrows';

export default ArrowLeftBold24;
