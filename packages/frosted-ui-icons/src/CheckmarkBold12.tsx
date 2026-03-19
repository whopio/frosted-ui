import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path d="M11 2.75L4 9.75L1 6.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

CheckmarkBold12.category = 'Checkmarks';

export default CheckmarkBold12;
