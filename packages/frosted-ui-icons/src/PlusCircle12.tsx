import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM6 3C6.41421 3 6.75 3.33579 6.75 3.75V5.25H8.25C8.66421 5.25 9 5.58579 9 6C9 6.41421 8.66421 6.75 8.25 6.75H6.75V8.25C6.75 8.66421 6.41421 9 6 9C5.58579 9 5.25 8.66421 5.25 8.25V6.75H3.75C3.33579 6.75 3 6.41421 3 6C3 5.58579 3.33579 5.25 3.75 5.25H5.25V3.75C5.25 3.33579 5.58579 3 6 3Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircle12.category = 'Interface General';

export default PlusCircle12;
