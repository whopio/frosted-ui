import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareBoldFilled20"
      {...props}
    >
      <path
        d="M6.5 1.75c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5C5.12 4.75 4 5.87 4 7.25v6.25C4 14.88 5.12 16 6.5 16h6.25c1.38 0 2.5-1.12 2.5-2.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 3.038-2.462 5.5-5.5 5.5H6.5C3.462 19 1 16.538 1 13.5V7.25c0-3.038 2.462-5.5 5.5-5.5zm11-.75c.828 0 1.5.672 1.5 1.5v5.75c0 .828-.672 1.5-1.5 1.5S16 9.078 16 8.25V6.121l-4.94 4.94c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.122L13.878 4H11.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h5.75z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareBoldFilled20.category = 'Arrows';

export default ArrowUpRightFromSquareBoldFilled20;
