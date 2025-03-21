import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracket12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M1.5 7.75L1.5 9.75C1.5 10.1642 1.83579 10.5 2.25 10.5L9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.75V7.75C10.5 7.33579 10.8358 7 11.25 7C11.6642 7 12 7.33579 12 7.75V9.75C12 10.9926 10.9926 12 9.75 12L2.25 12C1.00736 12 3.80159e-07 10.9926 2.66237e-07 9.75L0 7.75C-7.77105e-08 7.33579 0.335786 7 0.75 7C1.16421 7 1.5 7.33579 1.5 7.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967L10.2803 2.21967C10.5732 2.51256 10.5732 2.98744 10.2803 3.28033L8.28033 5.28033C7.98744 5.57322 7.51256 5.57322 7.21967 5.28033C6.92678 4.98744 6.92678 4.51256 7.21967 4.21967L7.93934 3.5H6.80966C6.08635 3.5 5.5 4.08635 5.5 4.80966V7.25C5.5 7.66421 5.16421 8 4.75 8C4.33579 8 4 7.66421 4 7.25V4.80966C4 3.25793 5.25793 2 6.80966 2H7.93934L7.21967 1.28033C6.92678 0.987437 6.92678 0.512563 7.21967 0.21967Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowUpRightFromBracket12;
