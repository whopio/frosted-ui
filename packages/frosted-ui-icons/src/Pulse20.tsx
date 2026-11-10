import * as React from 'react';
import { IconProps } from './types';

export const Pulse20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse20"
      {...props}
    >
      <path
        d="M18.248 6.464l-6.4 6.401c-.154.154-.403.154-.556 0L7.133 8.706c-.153-.153-.402-.153-.556 0l-4.829 4.83"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Pulse20.category = 'Stats & Charts';

export default Pulse20;
