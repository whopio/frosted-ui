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
        d="M7.00004 6.99996L12.0001 12M17.0001 17L12.0001 12M12.0001 12L7.00004 17M12.0001 12L17.0001 6.99996"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBold24.category = 'Interface General';

export default XMarkSmallBold24;
