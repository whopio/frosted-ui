import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightFilled32"
      {...props}
    >
      <path
        d="M24.882 17.363c-.488-.488-1.28-.488-1.767 0-.488.489-.488 1.28 0 1.768l3.618 3.617H2.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h24.483l-3.618 3.618c-.488.488-.488 1.28 0 1.768s1.28.488 1.767 0l5.752-5.752c.488-.488.488-1.28 0-1.768l-5.752-5.75zm-16-15.997c-.488-.488-1.28-.488-1.767 0l-5.748 5.75C1.133 7.35 1 7.667 1 7.998c0 .331.132.65.367.884l5.748 5.748c.488.488 1.28.487 1.767 0 .488-.488.488-1.28 0-1.768L5.268 9.25h24.483C30.44 9.25 31 8.69 31 8s-.56-1.25-1.25-1.25H5.267l3.614-3.615c.488-.488.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightFilled32.category = 'Arrows';

export default DoubleArrowLeftRightFilled32;
