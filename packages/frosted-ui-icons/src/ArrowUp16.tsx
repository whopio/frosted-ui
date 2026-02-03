import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C8.20556 1 8.40235 1.08438 8.54395 1.2334L13.2939 6.2334C13.5792 6.53371 13.5669 7.00868 13.2666 7.29395C12.9663 7.57912 12.4913 7.56687 12.2061 7.2666L8.75 3.62891V14.25C8.75 14.6642 8.41421 15 8 15C7.58582 15 7.25 14.6642 7.25 14.25V3.62891L3.79395 7.2666C3.50868 7.56684 3.03369 7.57915 2.7334 7.29395C2.43318 7.00869 2.4209 6.5337 2.70605 6.2334L7.45605 1.2334C7.59763 1.08437 7.79445 1.00002 8 1Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp16;
