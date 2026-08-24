import * as React from 'react';
import { IconProps } from './types';

export const Dot16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dot16"
      {...props}
    >
      <path
        d="M4.75 8c0-1.795 1.455-3.25 3.25-3.25S11.25 6.205 11.25 8 9.795 11.25 8 11.25 4.75 9.795 4.75 8z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot16.category = 'Interface General';

export default Dot16;
