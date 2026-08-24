import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketFilled32"
      {...props}
    >
      <path
        d="M29.75 20.5c.69 0 1.25.56 1.25 1.25v2.5c0 3.728-3.022 6.75-6.75 6.75H7.75C4.022 31 1 27.978 1 24.25v-2.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v2.5c0 2.347 1.903 4.25 4.25 4.25h16.5c2.347 0 4.25-1.903 4.25-4.25v-2.5c0-.69.56-1.25 1.25-1.25zM19.366 1.366c.488-.488 1.28-.488 1.768 0l5 5c.488.488.488 1.28 0 1.768l-5 5c-.488.488-1.28.488-1.768 0-.488-.489-.488-1.28 0-1.768L22.232 8.5H17.75c-2.071 0-3.75 1.679-3.75 3.75v10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-10.5C11.5 8.798 14.298 6 17.75 6h4.482l-2.866-2.866c-.488-.489-.488-1.28 0-1.768z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketFilled32.category = 'Arrows';

export default ArrowUpRightFromBracketFilled32;
