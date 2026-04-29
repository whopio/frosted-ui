import * as React from 'react';
import { IconProps } from './types';

export const Clock16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM7.75 3.75C8.16417 3.75 8.49993 4.08585 8.5 4.5V8.11035L10.4297 9.46094C10.7689 9.69844 10.8516 10.1656 10.6143 10.5049C10.3768 10.8441 9.9096 10.9267 9.57031 10.6895L7.32031 9.11426L7.24902 9.05762C7.09182 8.91638 7.00003 8.71414 7 8.5V4.5C7.00007 4.08585 7.33583 3.75 7.75 3.75Z"
        fill={color}
      />
    </svg>
  );
};

Clock16.category = 'Interface General';

export default Clock16;
