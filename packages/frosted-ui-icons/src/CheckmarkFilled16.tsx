import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.1001 8.64276L5.58819 13.1309L15.6001 3.11895"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkFilled16.category = 'Checkmarks';

export default CheckmarkFilled16;
