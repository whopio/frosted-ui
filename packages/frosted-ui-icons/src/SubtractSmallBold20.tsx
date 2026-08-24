import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold20"
      {...props}
    >
      <path d="M15 9c.552 0 1 .448 1 1s-.448 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h10z" fill={color} />
    </svg>
  );
};

SubtractSmallBold20.category = 'Interface General';

export default SubtractSmallBold20;
