import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromBracketBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromBracketBold16"
      {...props}
    >
      <path
        d="M14 8.75c.552 0 1 .448 1 1V11c0 2.21-1.791 4-4 4H5c-2.209 0-4-1.79-4-4V9.75c0-.552.448-1 1-1s1 .448 1 1V11c0 1.105.896 2 2 2h6c1.104 0 2-.895 2-2V9.75c0-.552.448-1 1-1zm-3.707-7.457c.39-.39 1.024-.39 1.414 0l2 2c.39.39.39 1.024 0 1.414l-2 2c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L10.586 5H10c-1.105 0-2 .896-2 2v3.25c0 .552-.448 1-1 1s-1-.448-1-1V7c0-2.209 1.79-4 4-4h.586l-.293-.293c-.39-.39-.39-1.023 0-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpRightFromBracketBold16.category = 'Arrows';

export default ArrowUpRightFromBracketBold16;
