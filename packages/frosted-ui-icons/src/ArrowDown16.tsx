import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 1C8.41421 1 8.75 1.33579 8.75 1.75V12.3711L12.2061 8.7334C12.4913 8.43313 12.9663 8.42088 13.2666 8.70605C13.5669 8.99132 13.5792 9.46629 13.2939 9.7666L8.54395 14.7666C8.40235 14.9156 8.20556 15 8 15C7.79445 15 7.59763 14.9156 7.45605 14.7666L2.70605 9.7666C2.4209 9.4663 2.43318 8.99131 2.7334 8.70605C3.03369 8.42085 3.50868 8.43316 3.79395 8.7334L7.25 12.3711V1.75C7.25 1.33581 7.58583 1.00005 8 1Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown16;
