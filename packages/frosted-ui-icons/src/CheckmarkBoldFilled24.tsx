import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.25 4.99988L8.18519 19.09L1.75 12.6548"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkBoldFilled24.category = 'Checkmarks';

export default CheckmarkBoldFilled24;
