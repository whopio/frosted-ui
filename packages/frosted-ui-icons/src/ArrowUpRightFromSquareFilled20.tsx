import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareFilled20"
      {...props}
    >
      <path
        d="M6.5 1.5c.69 0 1.25.56 1.25 1.25S7.19 4 6.5 4h-.25C4.731 4 3.5 5.231 3.5 6.75v7c0 1.519 1.231 2.75 2.75 2.75h7c1.519 0 2.75-1.231 2.75-2.75v-.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v.25c0 2.9-2.35 5.25-5.25 5.25h-7C3.35 19 1 16.65 1 13.75v-7C1 3.85 3.35 1.5 6.25 1.5h.25zM17.75 1c.69 0 1.25.56 1.25 1.25V8c0 .69-.56 1.25-1.25 1.25S16.5 8.69 16.5 8V5.268l-5.616 5.616c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.768L14.732 3.5H12c-.69 0-1.25-.56-1.25-1.25S11.31 1 12 1h5.75z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled20.category = 'Arrows';

export default ArrowUpRightFromSquareFilled20;
