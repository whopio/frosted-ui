import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftFilled32"
      {...props}
    >
      <path
        d="M7.119 17.363c.488-.488 1.28-.488 1.767 0 .488.489.488 1.28 0 1.768l-3.618 3.617h24.483c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5.267l3.618 3.618c.488.488.488 1.28 0 1.768s-1.28.488-1.767 0l-5.752-5.752c-.488-.488-.488-1.28 0-1.768l5.752-5.75zm16-15.997c.488-.488 1.28-.488 1.767 0l5.748 5.75c.234.234.366.552.366.883 0 .331-.131.65-.366.884l-5.748 5.748c-.488.488-1.28.487-1.767 0-.488-.488-.488-1.28 0-1.768l3.614-3.614H2.25C1.56 9.25 1 8.69 1 8s.56-1.25 1.25-1.25h24.483l-3.614-3.615c-.488-.488-.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeftFilled32.category = 'Arrows';

export default DoubleArrowRightLeftFilled32;
