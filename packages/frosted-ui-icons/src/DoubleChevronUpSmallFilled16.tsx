import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallFilled16"
      {...props}
    >
      <path
        d="M10.5 7.879c.488.488 1.279.488 1.767 0s.488-1.28 0-1.768L9.12 2.964c-.619-.618-1.621-.618-2.24 0L3.733 6.11c-.488.488-.488 1.28 0 1.768s1.28.488 1.767 0l2.5-2.5 2.5 2.5zm0 5.25c.488.488 1.279.488 1.767 0s.488-1.28 0-1.768L9.12 8.214c-.619-.618-1.621-.618-2.24 0L3.733 11.36c-.488.488-.488 1.28 0 1.768s1.28.488 1.767 0l2.5-2.5 2.5 2.5z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled16.category = 'Arrows';

export default DoubleChevronUpSmallFilled16;
