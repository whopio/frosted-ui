import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBoldFilled32"
      {...props}
    >
      <path
        d="M29.5 20.25c.828 0 1.5.672 1.5 1.5V24c0 3.866-3.134 7-7 7H8c-3.866 0-7-3.134-7-7v-2.25c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V24c0 2.209 1.79 4 4 4h16c2.21 0 4-1.791 4-4v-2.25c0-.828.672-1.5 1.5-1.5zM19.94 1.44c.585-.586 1.535-.586 2.12 0l5 5c.586.585.586 1.535 0 2.12l-5 5c-.585.586-1.535.586-2.12 0-.586-.585-.586-1.535 0-2.12L22.378 9H18.5c-1.933 0-3.5 1.567-3.5 3.5v9.75c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V12.5C12 8.91 14.91 6 18.5 6h3.879l-2.44-2.44c-.585-.585-.585-1.535 0-2.12z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBoldFilled32.category = 'Arrows';

export default ArrowUpRightFromBracketBoldFilled32;
