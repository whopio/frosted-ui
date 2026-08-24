import * as React from 'react';
import { IconProps } from './types';

export const SubtractBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SubtractBold24"
      {...props}
    >
      <path d="M22 11c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h20z" fill={color} />
    </svg>
  );
};

SubtractBold24.category = 'Interface General';

export default SubtractBold24;
