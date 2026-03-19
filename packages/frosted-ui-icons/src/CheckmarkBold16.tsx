import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14 4.40551L5.63296 12.7726L2.00003 9.13962"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkBold16.category = 'Checkmarks';

export default CheckmarkBold16;
