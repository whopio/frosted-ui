import * as React from 'react';
import { IconProps } from './types';

export const ListNumber16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.83333 11.1667H13.5M7.83333 4.83332H13.5M4.16667 6.49999V3.16666L2.5 4.33332M2.66667 9.95452C2.66667 9.95452 3.14915 9.49999 3.73924 9.49999C4.32933 9.49999 4.80769 9.91459 4.80769 10.426C4.80769 11.6257 2.5 11.8333 2.5 12.8333H5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListNumber16;
