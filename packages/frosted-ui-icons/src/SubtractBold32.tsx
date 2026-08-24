import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBold32"
      {...props}
    >
      <path d="M30 15c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h28z" fill={color} />
    </svg>
  );
};

SubtractBold32.category = 'Interface General';

export default SubtractBold32;
