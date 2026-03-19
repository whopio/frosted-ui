import * as React from 'react';
import { IconProps } from './types';

export const XMark24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 12L1.75001 22.25M12 12L1.75001 1.74999M12 12L22.25 1.74999M12 12L22.25 22.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark24.category = 'Product Icons';

export default XMark24;
