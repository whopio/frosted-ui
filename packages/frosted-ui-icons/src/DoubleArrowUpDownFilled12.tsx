import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownFilled12"
      {...props}
    >
      <path
        d="M6.366 9.884c-.488-.488-.488-1.28 0-1.768.374-.374.927-.46 1.385-.26L7.75 1.25C7.75.56 8.31 0 9 0s1.25.56 1.25 1.25v6.605c.458-.2 1.01-.113 1.384.261.488.488.488 1.28 0 1.768l-1.75 1.75c-.488.487-1.279.488-1.767 0l-1.751-1.75zm-6-6c-.488-.488-.488-1.28 0-1.769L2.117.365c.488-.487 1.28-.487 1.768.001l1.75 1.75c.487.488.487 1.28 0 1.768-.375.374-.927.46-1.384.26L4.25 10.75C4.25 11.44 3.69 12 3 12s-1.25-.56-1.25-1.25V4.144c-.457.2-1.01.114-1.384-.26z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownFilled12.category = 'Arrows';

export default DoubleArrowUpDownFilled12;
