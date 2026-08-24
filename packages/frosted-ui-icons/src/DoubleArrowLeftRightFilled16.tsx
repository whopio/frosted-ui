import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightFilled16"
      {...props}
    >
      <path
        d="M11.884 8.364c-.488-.488-1.28-.488-1.767 0-.488.488-.488 1.28 0 1.768l.616.616H2.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h8.483l-.616.616c-.488.488-.488 1.28 0 1.768s1.28.488 1.767 0l2.75-2.75c.488-.489.488-1.28 0-1.768l-2.75-2.75zM5.888.366c-.488-.488-1.28-.488-1.767 0L1.367 3.12c-.235.234-.367.552-.367.884 0 .331.132.65.367.884L4.12 7.64c.488.488 1.279.488 1.767 0s.488-1.279 0-1.767l-.62-.62h8.483c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H5.268l.62-.62c.488-.489.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightFilled16.category = 'Arrows';

export default DoubleArrowLeftRightFilled16;
