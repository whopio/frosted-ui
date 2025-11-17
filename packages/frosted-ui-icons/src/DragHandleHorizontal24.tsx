import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="4" cy="16" r="1.25" transform="rotate(-90 4 16)" fill={color} />
      <circle cx="12" cy="16" r="1.25" transform="rotate(-90 12 16)" fill={color} />
      <circle cx="20" cy="16" r="1.25" transform="rotate(-90 20 16)" fill={color} />
      <circle cx="4" cy="8.5" r="1.25" transform="rotate(-90 4 8.5)" fill={color} />
      <circle cx="12" cy="8.5" r="1.25" transform="rotate(-90 12 8.5)" fill={color} />
      <circle cx="20" cy="8.5" r="1.25" transform="rotate(-90 20 8.5)" fill={color} />
    </svg>
  );
};

export default DragHandleHorizontal24;
