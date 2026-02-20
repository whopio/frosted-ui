import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path d="M1 6.5L4.25 9.75L11.5 2.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

CheckmarkFilled12.category = 'Checkmarks';

export default CheckmarkFilled12;
