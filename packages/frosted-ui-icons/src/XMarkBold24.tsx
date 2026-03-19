import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.00003 1.99997L12 12M22.0001 22L12 12M12 12L1.99998 22M12 12L22.0001 1.99999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold24.category = 'Product Icons';

export default XMarkBold24;
