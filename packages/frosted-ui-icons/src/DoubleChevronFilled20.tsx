import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronFilled20"
      {...props}
    >
      <path
        d="M14.367 12.616c.488-.488 1.28-.488 1.768 0 .487.488.487 1.28 0 1.768l-5.25 5.25c-.235.234-.553.366-.884.366-.332 0-.65-.132-.884-.366l-5.251-5.25c-.488-.489-.488-1.28 0-1.768s1.28-.488 1.769 0L10 16.982l4.366-4.366zM9.116.366c.488-.488 1.28-.488 1.768 0l5.25 5.25c.488.488.488 1.28 0 1.768-.489.488-1.28.488-1.768 0L10 3.017 5.634 7.384c-.489.488-1.28.488-1.768 0-.488-.489-.488-1.28 0-1.768l5.25-5.25z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronFilled20.category = 'Arrows';

export default DoubleChevronFilled20;
