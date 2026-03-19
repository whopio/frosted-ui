import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 3C5.58579 3 5.25 3.33579 5.25 3.75V5.25H3.75C3.33579 5.25 3 5.58579 3 6C3 6.41421 3.33579 6.75 3.75 6.75H5.25V8.25C5.25 8.66421 5.58579 9 6 9C6.41421 9 6.75 8.66421 6.75 8.25V6.75H8.25C8.66421 6.75 9 6.41421 9 6C9 5.58579 8.66421 5.25 8.25 5.25H6.75V3.75C6.75 3.33579 6.41421 3 6 3Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleFilled12.category = 'Product Icons';

export default PlusCircleFilled12;
