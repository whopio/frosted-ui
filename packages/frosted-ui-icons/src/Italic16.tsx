import * as React from 'react';
import { IconProps } from './types';

export const Italic16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M6.49996 2.5H9.66663M9.66663 2.5H12.8333M9.66663 2.5L6.33329 13.5M6.33329 13.5H3.16663M6.33329 13.5H9.50669"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Italic16;
