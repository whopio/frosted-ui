import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.24988 2.25L12 12M21.75 21.75L12 12M12 12L2.2501 21.75M12 12L21.75 2.24999"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled24.category = 'Product Icons';

export default XMarkFilled24;
