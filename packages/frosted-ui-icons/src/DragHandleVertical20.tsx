import * as React from 'react';
import { IconProps } from './types';

export const DragHandleVertical20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="7" cy="4" r="1" fill={color} />
      <circle cx="13" cy="4" r="1" fill={color} />
      <circle cx="7" cy="10" r="1" fill={color} />
      <circle cx="13" cy="10" r="1" fill={color} />
      <circle cx="7" cy="16" r="1" fill={color} />
      <circle cx="13" cy="16" r="1" fill={color} />
    </svg>
  );
};

export default DragHandleVertical20;
