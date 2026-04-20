import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.25 2C9.66421 2 10 2.33579 10 2.75C10 3.16421 9.66421 3.5 9.25 3.5H7.25C4.62665 3.5 2.5 5.62665 2.5 8.25V16.75C2.5 19.3734 4.62665 21.5 7.25 21.5H15.75C18.3734 21.5 20.5 19.3734 20.5 16.75V14.75C20.5 14.3358 20.8358 14 21.25 14C21.6642 14 22 14.3358 22 14.75V16.75C22 20.2018 19.2018 23 15.75 23H7.25C3.79822 23 1 20.2018 1 16.75V8.25C1 4.79822 3.79822 2 7.25 2H9.25ZM22.25 1C22.6642 1 23 1.33579 23 1.75V9.25C23 9.66421 22.6642 10 22.25 10C21.8358 10 21.5 9.66421 21.5 9.25V3.56055L12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303C11.1768 12.2374 11.1768 11.7626 11.4697 11.4697L20.4395 2.5H14.75C14.3358 2.5 14 2.16421 14 1.75C14 1.33579 14.3358 1 14.75 1H22.25Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare24.category = 'Arrows';

export default ArrowUpRightFromSquare24;
