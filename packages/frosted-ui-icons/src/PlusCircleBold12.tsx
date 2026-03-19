import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM6 3C6.55228 3 7 3.44772 7 4V5H8C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7H7V8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8V7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H5V4C5 3.44772 5.44772 3 6 3Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBold12.category = 'Product Icons';

export default PlusCircleBold12;
