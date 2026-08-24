import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketFilled16"
      {...props}
    >
      <path
        d="M13.75 7.5c.69 0 1.25.56 1.25 1.25v1.5c0 2.623-2.127 4.75-4.75 4.75h-4.5C3.127 15 1 12.873 1 10.25v-1.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v1.5c0 1.243 1.007 2.25 2.25 2.25h4.5c1.243 0 2.25-1.007 2.25-2.25v-1.5c0-.69.56-1.25 1.25-1.25zM6.88 1.464c.618-.618 1.62-.618 2.24 0l2.764 2.765c.488.488.488 1.28 0 1.767-.488.488-1.28.488-1.768 0L9.25 5.13V9c0 .69-.56 1.25-1.25 1.25S6.75 9.69 6.75 9V5.13l-.866.866c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.767L6.88 1.464z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketFilled16.category = 'Arrows';

export default ArrowUpFromBracketFilled16;
