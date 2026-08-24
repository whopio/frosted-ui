import * as React from 'react';
import { IconProps } from './types';

export const Percentage32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Percentage32"
      {...props}
    >
      <path
        d="M25.5 20c3.038 0 5.5 2.462 5.5 5.5S28.538 31 25.5 31 20 28.538 20 25.5s2.462-5.5 5.5-5.5zm4.217-18.78c.293-.293.768-.293 1.06 0 .293.293.293.767 0 1.06L2.28 30.776c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L29.717 1.22zM25.5 21.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM6.5 1C9.537 1 12 3.463 12 6.5S9.537 12 6.5 12C3.462 12 1 9.538 1 6.5 1 3.463 3.463 1 6.5 1zm0 1.5c-2.21 0-4 1.791-4 4 0 2.21 1.79 4 4 4 2.209 0 4-1.791 4-4s-1.791-4-4-4z"
        fill={color}
      />
    </svg>
  );
};

Percentage32.category = 'Money & Shopping';

export default Percentage32;
