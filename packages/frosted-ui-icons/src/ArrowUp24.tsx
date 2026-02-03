import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M12 3C12.204 3.00003 12.3996 3.08344 12.541 3.23047L18.791 9.73047C19.0777 10.0291 19.0679 10.504 18.7695 10.791C18.471 11.0777 17.996 11.0679 17.709 10.7695L12.75 5.6123V20.25C12.75 20.6642 12.4142 20.9999 12 21C11.5858 21 11.25 20.6642 11.25 20.25V5.6123L6.29102 10.7695C6.00405 11.068 5.52907 11.0777 5.23047 10.791C4.93201 10.504 4.92223 10.0291 5.20898 9.73047L11.459 3.23047C11.6004 3.08344 11.796 3 12 3Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp24;
