import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareFilled32"
      {...props}
    >
      <path
        d="M11.5 1.5c.69 0 1.25.56 1.25 1.25S12.19 4 11.5 4H9.75C6.298 4 3.5 6.798 3.5 10.25v12c0 3.452 2.798 6.25 6.25 6.25h12c3.452 0 6.25-2.798 6.25-6.25V20.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v1.75c0 4.832-3.918 8.75-8.75 8.75h-12C4.918 31 1 27.082 1 22.25v-12C1 5.418 4.918 1.5 9.75 1.5h1.75zM29.75 1c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V5.268L16.884 16.884c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L26.732 3.5H19.25c-.69 0-1.25-.56-1.25-1.25S18.56 1 19.25 1h10.5z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled32.category = 'Arrows';

export default ArrowUpRightFromSquareFilled32;
