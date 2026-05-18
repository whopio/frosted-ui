import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM4.5 3.75C4.91421 3.75 5.25 4.08579 5.25 4.5V7.5C5.25 7.91421 4.91421 8.25 4.5 8.25C4.08579 8.25 3.75 7.91421 3.75 7.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75ZM7.5 3.75C7.91421 3.75 8.25 4.08579 8.25 4.5V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5V4.5C6.75 4.08579 7.08579 3.75 7.5 3.75Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle12.category = 'Sound & Music';

export default PauseCircle12;
