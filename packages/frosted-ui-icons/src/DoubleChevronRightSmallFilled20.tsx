import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightSmallFilled20"
      {...props}
    >
      <path
        d="M9.87 6.717c-.488-.488-.488-1.28 0-1.768s1.279-.488 1.767 0l3.874 3.871c.652.651.652 1.708 0 2.359l-3.874 3.87c-.488.489-1.28.489-1.767 0-.488-.487-.488-1.279 0-1.767L13.154 10 9.87 6.717zm-5.503 0c-.488-.488-.488-1.28 0-1.768s1.28-.488 1.767 0l3.874 3.871c.652.651.652 1.708 0 2.359l-3.874 3.87c-.488.489-1.28.489-1.767 0-.488-.487-.488-1.279 0-1.767L7.65 10 4.367 6.717z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled20.category = 'Arrows';

export default DoubleChevronRightSmallFilled20;
