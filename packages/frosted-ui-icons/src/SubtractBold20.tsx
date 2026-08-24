import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBold20"
      {...props}
    >
      <path d="M18 9c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h16z" fill={color} />
    </svg>
  );
};

SubtractBold20.category = 'Interface General';

export default SubtractBold20;
