import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquare32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquare32"
      {...props}
    >
      <path
        d="M12.25 2c.414 0 .75.336.75.75s-.336.75-.75.75h-3c-3.728 0-6.75 3.022-6.75 6.75v12.5c0 3.728 3.022 6.75 6.75 6.75h12.5c3.728 0 6.75-3.022 6.75-6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3c0 4.556-3.694 8.25-8.25 8.25H9.25C4.694 31 1 27.306 1 22.75v-12.5C1 5.694 4.694 2 9.25 2h3zm18-1c.414 0 .75.336.75.75v10.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56L16.53 16.53c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L28.44 2.5h-8.69c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquare32.category = 'Arrows';

export default ArrowUpRightFromSquare32;
