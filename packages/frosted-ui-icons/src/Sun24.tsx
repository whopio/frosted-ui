import * as React from 'react';
import { IconProps } from './types';

export const Sun24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle
        cx="12"
        cy="12"
        r="4.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.5L12 1.74999M17.3033 6.69672L19.2479 4.75217M4.5 12L1.74999 12M6.69666 6.69672L4.7521 4.75217M12 22.25L12 19.5M4.7522 19.2479L6.69675 17.3033M22.25 12L19.5 12M19.2478 19.2479L17.3033 17.3033"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sun24;
