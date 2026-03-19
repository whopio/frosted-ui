import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.75729 7.75736L11.9999 12M16.2426 16.2426L11.9999 12M11.9999 12L7.75729 16.2426M11.9999 12L16.2426 7.75736"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBold24.category = 'Product Icons';

export default XMarkSmallBold24;
