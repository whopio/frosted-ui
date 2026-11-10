import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallFilled20"
      {...props}
    >
      <path
        d="M13.283 10.13c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.767l-3.87-3.874c-.652-.652-1.708-.652-2.36 0L4.95 8.363c-.488.488-.488 1.28 0 1.767.488.488 1.28.488 1.767 0L10 6.846l3.283 3.284zm0 5.503c.488.488 1.28.488 1.767 0 .488-.488.488-1.28 0-1.767L11.18 9.99c-.652-.65-1.708-.65-2.36 0l-3.87 3.875c-.488.488-.488 1.279 0 1.767s1.28.488 1.767 0L10 12.35l3.283 3.284z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallFilled20.category = 'Arrows';

export default DoubleChevronUpSmallFilled20;
