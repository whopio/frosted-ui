import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.5 1C4.91421 1 5.25 1.33579 5.25 1.75C5.25 2.16421 4.91421 2.5 4.5 2.5H3.25C2.2835 2.5 1.5 3.2835 1.5 4.25V8.75C1.5 9.7165 2.2835 10.5 3.25 10.5H7.75C8.7165 10.5 9.5 9.7165 9.5 8.75V7.5C9.5 7.08579 9.83579 6.75 10.25 6.75C10.6642 6.75 11 7.08579 11 7.5V8.75C11 10.5449 9.54493 12 7.75 12H3.25C1.45507 12 0 10.5449 0 8.75V4.25C0 2.45507 1.45507 1 3.25 1H4.5ZM11.25 0C11.6642 0 12 0.335786 12 0.75V4.25C12 4.66421 11.6642 5 11.25 5C10.8358 5 10.5 4.66421 10.5 4.25V2.56055L6.53027 6.53027C6.23738 6.82317 5.76262 6.82317 5.46973 6.53027C5.17683 6.23738 5.17683 5.76262 5.46973 5.46973L9.43945 1.5H7.75C7.33579 1.5 7 1.16421 7 0.75C7 0.335786 7.33579 0 7.75 0H11.25Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare12.category = 'Arrows';

export default ArrowUpRightFromSquare12;
