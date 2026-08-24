import * as React from 'react';
import { IconProps } from './types';

export const CodeblockBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeblockBoldFilled12"
      {...props}
    >
      <path
        d="M8 0c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h4zM5.457 3.793c-.39-.39-1.024-.39-1.414 0l-1.5 1.5c-.39.39-.39 1.024 0 1.414l1.5 1.5c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L4.664 6l.793-.793c.39-.39.39-1.024 0-1.414zm2.5 0c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L7.336 6l-.793.793c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0l1.5-1.5c.39-.39.39-1.024 0-1.414l-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

CodeblockBoldFilled12.category = 'Code';

export default CodeblockBoldFilled12;
