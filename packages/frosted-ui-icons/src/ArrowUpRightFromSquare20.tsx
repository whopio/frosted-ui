import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquare20"
      {...props}
    >
      <path
        d="M7.5 2c.414 0 .75.336.75.75s-.336.75-.75.75H5.75C3.955 3.5 2.5 4.955 2.5 6.75v7.5c0 1.795 1.455 3.25 3.25 3.25h7.5c1.795 0 3.25-1.455 3.25-3.25V12.5c0-.414.336-.75.75-.75s.75.336.75.75v1.75c0 2.623-2.127 4.75-4.75 4.75h-7.5C3.127 19 1 16.873 1 14.25v-7.5C1 4.127 3.127 2 5.75 2H7.5zm10.75-1c.414 0 .75.336.75.75V7.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56l-6.97 6.97c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l6.97-6.97H12.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.75z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare20.category = 'Arrows';

export default ArrowUpRightFromSquare20;
