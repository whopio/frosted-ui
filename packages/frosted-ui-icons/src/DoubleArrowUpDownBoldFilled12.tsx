import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDownBoldFilled12"
      {...props}
    >
      <path
        d="M6.366 9.884c-.489-.488-.488-1.28 0-1.768.374-.374.926-.46 1.383-.26V1.25C7.75.56 8.31 0 9 0s1.25.56 1.25 1.25v6.606c.458-.2 1.01-.114 1.384.26.488.488.488 1.28 0 1.768l-1.75 1.75C9.65 11.868 9.331 12 9 12c-.331 0-.65-.132-.883-.366l-1.75-1.75zm-6-6c-.488-.488-.488-1.28 0-1.768l1.75-1.75c.489-.488 1.28-.488 1.768 0l1.75 1.75c.488.488.488 1.28 0 1.768-.374.374-.926.46-1.384.262v6.604C4.25 11.44 3.69 12 3 12s-1.25-.56-1.25-1.25V4.146c-.457.199-1.01.112-1.383-.262z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDownBoldFilled12.category = 'Arrows';

export default DoubleArrowUpDownBoldFilled12;
