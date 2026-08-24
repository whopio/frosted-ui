import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallFilled16"
      {...props}
    >
      <path
        d="M10.5 8.117c.488-.488 1.279-.488 1.767 0s.488 1.28 0 1.767l-3.148 3.148c-.618.618-1.62.618-2.239 0L3.733 9.884c-.488-.488-.488-1.28 0-1.767.488-.489 1.28-.489 1.767 0L8 10.616l2.5-2.5zm0-5.25c.488-.488 1.279-.488 1.767 0s.488 1.28 0 1.767L9.119 7.782c-.618.618-1.62.618-2.239 0L3.733 4.634c-.488-.488-.488-1.28 0-1.767.488-.489 1.28-.489 1.767 0L8 5.366l2.5-2.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallFilled16.category = 'Arrows';

export default DoubleChevronDownSmallFilled16;
