import * as React from 'react';
import { IconProps } from './types';

export const DragHandleVertical12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <circle cx="4" cy="2" r="1" fill={color} />
      <circle cx="8" cy="2" r="1" fill={color} />
      <circle cx="4" cy="6" r="1" fill={color} />
      <circle cx="8" cy="6" r="1" fill={color} />
      <circle cx="4" cy="10" r="1" fill={color} />
      <circle cx="8" cy="10" r="1" fill={color} />
    </svg>
  );
};

export default DragHandleVertical12;
