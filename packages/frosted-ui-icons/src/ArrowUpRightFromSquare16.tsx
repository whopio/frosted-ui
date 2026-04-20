import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 2C6.41421 2 6.75 2.33579 6.75 2.75C6.75 3.16421 6.41421 3.5 6 3.5H4.75C3.50736 3.5 2.5 4.50736 2.5 5.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H10.25C11.4926 13.5 12.5 12.4926 12.5 11.25V10C12.5 9.58579 12.8358 9.25 13.25 9.25C13.6642 9.25 14 9.58579 14 10V11.25C14 13.3211 12.3211 15 10.25 15H4.75C2.67893 15 1 13.3211 1 11.25V5.75C1 3.67893 2.67893 2 4.75 2H6ZM14.25 1C14.6642 1 15 1.33579 15 1.75V6C15 6.41421 14.6642 6.75 14.25 6.75C13.8358 6.75 13.5 6.41421 13.5 6V3.56055L8.53027 8.53027C8.23738 8.82317 7.76262 8.82317 7.46973 8.53027C7.17683 8.23738 7.17683 7.76262 7.46973 7.46973L12.4395 2.5H10C9.58579 2.5 9.25 2.16421 9.25 1.75C9.25 1.33579 9.58579 1 10 1H14.25Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare16.category = 'Arrows';

export default ArrowUpRightFromSquare16;
