import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path d="M9 4.25L5 8.25L3 6.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

CheckmarkSmallBold12.category = 'Checkmarks';

export default CheckmarkSmallBold12;
