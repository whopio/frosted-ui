import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold32"
      {...props}
    >
      <path d="M24 15c.552 0 1 .448 1 1s-.448 1-1 1H8c-.552 0-1-.448-1-1s.448-1 1-1h16z" fill={color} />
    </svg>
  );
};

SubtractSmallBold32.category = 'Interface General';

export default SubtractSmallBold32;
