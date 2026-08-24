import * as React from 'react';
import { IconProps } from './types';

export const SubtractSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractSmallBold16"
      {...props}
    >
      <path d="M12 7c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1s.448-1 1-1h8z" fill={color} />
    </svg>
  );
};

SubtractSmallBold16.category = 'Interface General';

export default SubtractSmallBold16;
