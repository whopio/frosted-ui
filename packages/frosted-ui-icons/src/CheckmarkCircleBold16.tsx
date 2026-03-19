import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="2" />
      <path d="M10.5 6.5L7 10L5.25 8.25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

CheckmarkCircleBold16.category = 'Checkmarks';

export default CheckmarkCircleBold16;
