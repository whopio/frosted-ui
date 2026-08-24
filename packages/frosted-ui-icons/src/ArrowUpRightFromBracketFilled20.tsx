import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketFilled20"
      {...props}
    >
      <path
        d="M17.75 11.25c.69 0 1.25.56 1.25 1.25v1.75c0 2.623-2.127 4.75-4.75 4.75h-8.5C3.127 19 1 16.873 1 14.25V12.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v1.75c0 1.243 1.008 2.25 2.25 2.25h8.5c1.242 0 2.25-1.007 2.25-2.25V12.5c0-.69.56-1.25 1.25-1.25zm-5.634-9.883c.488-.489 1.28-.489 1.768 0l3 3c.488.488.488 1.28 0 1.767l-3 3c-.488.488-1.28.488-1.768 0s-.488-1.28 0-1.767l.866-.867H11.25C10.007 6.5 9 7.508 9 8.75v4.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-4.5C6.5 6.127 8.627 4 11.25 4h1.732l-.866-.866c-.488-.488-.488-1.28 0-1.767z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketFilled20.category = 'Arrows';

export default ArrowUpRightFromBracketFilled20;
