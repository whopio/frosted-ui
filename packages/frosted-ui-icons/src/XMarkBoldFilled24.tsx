import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.50002 2.49997L11.9999 12M21.5 21.5L11.9999 12M11.9999 12L2.49997 21.5M11.9999 12L21.5 2.49997"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBoldFilled24.category = 'Interface General';

export default XMarkBoldFilled24;
