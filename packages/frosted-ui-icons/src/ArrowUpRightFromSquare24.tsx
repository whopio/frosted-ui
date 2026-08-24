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
      data-fui-icon="ArrowUpRightFromSquare24"
      {...props}
    >
      <path
        d="M9.25 2c.414 0 .75.336.75.75s-.336.75-.75.75h-2C4.627 3.5 2.5 5.627 2.5 8.25v8.5c0 2.623 2.127 4.75 4.75 4.75h8.5c2.623 0 4.75-2.127 4.75-4.75v-2c0-.414.336-.75.75-.75s.75.336.75.75v2c0 3.452-2.798 6.25-6.25 6.25h-8.5C3.798 23 1 20.202 1 16.75v-8.5C1 4.798 3.798 2 7.25 2h2zm13-1c.414 0 .75.336.75.75v7.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56l-8.97 8.97c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l8.97-8.97h-5.69c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare24.category = 'Arrows';

export default ArrowUpRightFromSquare24;
