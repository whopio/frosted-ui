import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFromBracketBold24"
      {...props}
    >
      <path
        d="M22 12.25c.552 0 1 .448 1 1V16c0 3.866-3.134 7-7 7H8c-3.866 0-7-3.134-7-7v-2.75c0-.552.448-1 1-1s1 .448 1 1V16c0 2.761 2.239 5 5 5h8c2.761 0 5-2.239 5-5v-2.75c0-.552.448-1 1-1zM10.94 1.44c.585-.586 1.535-.586 2.12 0l5.854 5.853c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0l-4.5-4.5V15c0 .552-.448 1-1 1s-1-.448-1-1V4.207l-4.5 4.5c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l5.854-5.854z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBold24.category = 'Arrows';

export default ArrowUpFromBracketBold24;
