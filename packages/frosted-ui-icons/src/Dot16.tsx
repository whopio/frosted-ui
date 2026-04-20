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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.75 8C4.75 6.20507 6.20507 4.75 8 4.75C9.79492 4.75 11.25 6.20507 11.25 8C11.25 9.79493 9.79493 11.25 8 11.25C6.20507 11.25 4.75 9.79492 4.75 8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot16.category = 'Interface General';

export default Dot16;
