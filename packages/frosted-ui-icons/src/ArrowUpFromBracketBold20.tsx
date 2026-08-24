import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketBold20"
      {...props}
    >
      <path
        d="M18 9.75c.552 0 1 .448 1 1v2.75c0 3.037-2.462 5.5-5.5 5.5h-7C3.462 19 1 16.537 1 13.5v-2.75c0-.552.448-1 1-1s1 .448 1 1v2.75C3 15.433 4.567 17 6.5 17h7c1.933 0 3.5-1.567 3.5-3.5v-2.75c0-.552.448-1 1-1zM9.105 1.317c.557-.453 1.377-.42 1.896.098l4.379 4.378c.39.39.39 1.024 0 1.414-.39.39-1.025.39-1.415 0L11 4.242V12c0 .552-.448 1-1 1s-1-.448-1-1V4.24L6.034 7.207c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l4.378-4.378.107-.098z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBold20.category = 'Arrows';

export default ArrowUpFromBracketBold20;
