import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.295 4.11058L5.63299 12.7726L1.75 8.88965"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkBoldFilled16.category = 'Checkmarks';

export default CheckmarkBoldFilled16;
