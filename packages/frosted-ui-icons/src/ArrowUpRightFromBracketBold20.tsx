import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBold20"
      {...props}
    >
      <path
        d="M18 11.75c.552 0 1 .448 1 1v1.75c0 2.485-2.015 4.5-4.5 4.5h-9C3.015 19 1 16.985 1 14.5v-1.75c0-.552.448-1 1-1s1 .448 1 1v1.75C3 15.88 4.12 17 5.5 17h9c1.38 0 2.5-1.12 2.5-2.5v-1.75c0-.552.448-1 1-1zM12.293 1.293c.39-.39 1.024-.39 1.414 0l3 3c.39.39.39 1.024 0 1.414l-3 3c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L13.586 6H11.5C10.12 6 9 7.12 9 8.5V13c0 .552-.448 1-1 1s-1-.448-1-1V8.5C7 6.015 9.015 4 11.5 4h2.086l-1.293-1.293c-.39-.39-.39-1.023 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBold20.category = 'Arrows';

export default ArrowUpRightFromBracketBold20;
