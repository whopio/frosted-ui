import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.2502 10L11.7501 3.49976M18.2502 10L11.7501 16.5001M18.2502 10H1.75024"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight20.category = 'Arrows';

export default ArrowRight20;
