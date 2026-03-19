import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path d="M10.75 3L4 9.75L1.25 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

CheckmarkBoldFilled12.category = 'Checkmarks';

export default CheckmarkBoldFilled12;
