import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownFilled32"
      {...props}
    >
      <path
        d="M17.364 24.882c-.488-.489-.488-1.28 0-1.768.488-.487 1.28-.488 1.768 0l3.617 3.618V2.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v24.482l3.618-3.618c.488-.488 1.28-.488 1.767 0 .488.488.488 1.28 0 1.768l-5.751 5.752c-.489.488-1.28.488-1.768 0l-5.751-5.752zm-15.997-16c-.488-.488-.488-1.28 0-1.768l5.749-5.748C7.35 1.132 7.668 1 8 1c.331 0 .65.132.884.366l5.748 5.748c.488.488.487 1.28 0 1.768-.489.488-1.28.488-1.768 0L9.25 5.267V29.75C9.25 30.44 8.69 31 8 31s-1.25-.56-1.25-1.25V5.267L3.135 8.882c-.489.488-1.28.488-1.768 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownFilled32.category = 'Arrows';

export default DoubleArrowUpDownFilled32;
