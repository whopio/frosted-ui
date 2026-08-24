import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBold12"
      {...props}
    >
      <path
        d="M11 6.5c.552 0 1 .448 1 1v1c0 1.933-1.567 3.5-3.5 3.5h-5C1.567 12 0 10.433 0 8.5v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .828.672 1.5 1.5 1.5h5c.828 0 1.5-.672 1.5-1.5v-1c0-.552.448-1 1-1zM7.043.293c.39-.39 1.024-.39 1.414 0l2 2c.39.39.39 1.023 0 1.414l-2 2c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L7.336 4H6.5c-.552 0-1 .448-1 1v2.5c0 .552-.448 1-1 1s-1-.448-1-1V5c0-1.657 1.343-3 3-3h.836l-.293-.293c-.39-.39-.39-1.024 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBold12.category = 'Arrows';

export default ArrowUpRightFromBracketBold12;
