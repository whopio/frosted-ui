import * as React from 'react';
import { IconProps } from './types';

export const PauseFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.66699 1.50037C5.40322 1.50054 6 2.0971 6 2.83337V13.1664C6 13.9027 5.40322 14.5002 4.66699 14.5004H3.33301C2.59678 14.5002 2 13.9027 2 13.1664V2.83337C2 2.0971 2.59678 1.50054 3.33301 1.50037H4.66699ZM12.667 1.50037C13.4032 1.50054 14 2.0971 14 2.83337V13.1664C14 13.9027 13.4032 14.5002 12.667 14.5004H11.333C10.5968 14.5002 10 13.9027 10 13.1664V2.83337C10 2.0971 10.5968 1.50054 11.333 1.50037H12.667Z"
        fill={color}
      />
    </svg>
  );
};

export default PauseFilled16;
