import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold12"
      {...props}
    >
      <path d="M9 5c.552 0 1 .448 1 1s-.448 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1h6z" fill={color} />
    </svg>
  );
};

SubtractSmallBold12.category = 'Interface General';

export default SubtractSmallBold12;
