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
        d="M9.87 6.717c-.489-.488-.488-1.28 0-1.768s1.279-.487 1.767 0l3.874 3.872c.651.65.651 1.707 0 2.358l-3.874 3.871c-.488.488-1.28.488-1.768 0-.487-.488-.488-1.28 0-1.768L13.154 10 9.869 6.717zm-5.503 0c-.489-.488-.488-1.28 0-1.768s1.279-.487 1.767 0l3.874 3.872c.651.65.651 1.707 0 2.358L6.134 15.05c-.488.488-1.28.488-1.768 0-.487-.488-.488-1.28 0-1.768L7.652 10 4.367 6.717z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled20.category = 'Arrows';

export default DoubleChevronRightSmallFilled20;
