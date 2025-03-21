import * as React from 'react';
import { IconProps } from './types';

export const Wallet12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.62465 3.25C9.62465 2.76675 9.1875 1.75 8.74965 1.75H1.97461C1.62943 1.75 1.34961 2.65482 1.34961 3M1.34961 3V8.625C1.34961 9.1773 1.79732 9.625 2.34961 9.625H9.5996C10.1519 9.625 10.5996 9.1773 10.5996 8.625V4.625C10.5996 4.07271 10.1519 3.625 9.5996 3.625H1.97461C1.62943 3.625 1.34961 3.34518 1.34961 3ZM8.62465 6.625C8.62465 6.8321 8.45675 7 8.24965 7C8.04255 7 7.87465 6.8321 7.87465 6.625C7.87465 6.4179 8.04255 6.25 8.24965 6.25C8.45675 6.25 8.62465 6.4179 8.62465 6.625Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet12;
