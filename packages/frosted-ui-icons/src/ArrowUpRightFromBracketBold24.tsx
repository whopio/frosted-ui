import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBold24"
      {...props}
    >
      <path
        d="M22 14.75c.552 0 1 .448 1 1v1.75c0 3.038-2.462 5.5-5.5 5.5H6.25C3.35 23 1 20.65 1 17.75v-2c0-.552.448-1 1-1s1 .448 1 1v2C3 19.545 4.455 21 6.25 21H17.5c1.933 0 3.5-1.567 3.5-3.5v-1.75c0-.552.448-1 1-1zM13.793 1.293c.39-.39 1.024-.39 1.414 0l4 4c.39.39.39 1.024 0 1.414l-4 4c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L16.086 7H13c-1.657 0-3 1.343-3 3v6c0 .552-.448 1-1 1s-1-.448-1-1v-6c0-2.761 2.239-5 5-5h3.086l-2.293-2.293c-.39-.39-.39-1.023 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBold24.category = 'Arrows';

export default ArrowUpRightFromBracketBold24;
