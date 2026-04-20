import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM3.9502 3.5C3.5636 3.5 3.25 3.8136 3.25 4.2002V7.7998C3.25 8.1864 3.5636 8.5 3.9502 8.5H4.5498C4.9364 8.5 5.25 8.1864 5.25 7.7998V4.2002C5.25 3.8136 4.9364 3.5 4.5498 3.5H3.9502ZM7.4502 3.5C7.0636 3.5 6.75 3.8136 6.75 4.2002V7.7998C6.75 8.1864 7.0636 8.5 7.4502 8.5H8.0498C8.4364 8.5 8.75 8.1864 8.75 7.7998V4.2002C8.75 3.8136 8.4364 3.5 8.0498 3.5H7.4502Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled12.category = 'Sound & Music';

export default PauseCircleFilled12;
