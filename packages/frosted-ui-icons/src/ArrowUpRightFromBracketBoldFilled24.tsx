import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBoldFilled24"
      {...props}
    >
      <path
        d="M21.5 14.25c.828 0 1.5.671 1.5 1.5V17c0 3.313-2.686 6-6 6H6.75C3.574 23 1 20.425 1 17.25v-1.5c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5v1.5C4 18.768 5.231 20 6.75 20H17c1.657 0 3-1.343 3-3v-1.25c0-.829.672-1.5 1.5-1.5zM13.94 1.44c.585-.587 1.535-.587 2.12 0l4 4c.586.585.586 1.534 0 2.12l-4 4c-.585.586-1.535.586-2.12 0-.586-.585-.586-1.535 0-2.12L15.379 8H13.5C12.12 8 11 9.119 11 10.5v5c0 .828-.672 1.5-1.5 1.5S8 16.328 8 15.5v-5C8 7.462 10.463 5 13.5 5h1.879l-1.44-1.44c-.585-.586-.585-1.535 0-2.12z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled24.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled24;
