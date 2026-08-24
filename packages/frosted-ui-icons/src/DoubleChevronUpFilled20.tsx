import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpFilled20"
      {...props}
    >
      <path
        d="M16.87 11.189c.488.488 1.28.488 1.768 0 .488-.489.488-1.28 0-1.768l-7.415-7.415c-.675-.675-1.77-.674-2.445.001L1.366 9.421c-.487.488-.488 1.28 0 1.768.489.488 1.28.488 1.768 0L10 4.319l6.87 6.87zm0 7c.488.488 1.28.488 1.768 0s.488-1.28 0-1.768l-7.415-7.415c-.675-.675-1.77-.674-2.445.001l-7.412 7.414c-.487.488-.488 1.28 0 1.768.489.488 1.28.488 1.768 0L10 11.319l6.87 6.87z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled20.category = 'Arrows';

export default DoubleChevronUpFilled20;
