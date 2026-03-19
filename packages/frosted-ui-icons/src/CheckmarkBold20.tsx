import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path d="M18 5L7 16L2 11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

CheckmarkBold20.category = 'Checkmarks';

export default CheckmarkBold20;
