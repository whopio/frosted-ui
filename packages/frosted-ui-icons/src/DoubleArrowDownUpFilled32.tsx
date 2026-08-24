import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUpFilled32"
      {...props}
    >
      <path
        d="M17.364 7.118c-.488.488-.488 1.28 0 1.768.488.487 1.28.487 1.768 0l3.617-3.619V29.75c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25V5.267l3.618 3.619c.488.487 1.28.487 1.768 0 .488-.488.487-1.28 0-1.768l-5.752-5.752c-.488-.488-1.28-.488-1.768 0l-5.75 5.752zm-15.998 16c-.487.488-.488 1.28 0 1.768l5.75 5.748c.234.234.552.366.883.366.331 0 .65-.132.884-.366l5.748-5.748c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0L9.25 26.732V2.25C9.25 1.56 8.69 1 8 1s-1.25.56-1.25 1.25v24.482l-3.615-3.614c-.488-.488-1.28-.488-1.768 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUpFilled32.category = 'Arrows';

export default DoubleArrowDownUpFilled32;
