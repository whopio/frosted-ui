import * as React from 'react';
import { IconProps } from './types';

export const BulbBlankFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BulbBlankFilled12"
      {...props}
    >
      <path
        d="M7.5 10.5c.414 0 .75.336.75.75s-.336.75-.75.75h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3zM6.001 0c2.491 0 4.501 2.034 4.501 4.53 0 1.387-.62 2.628-1.596 3.458-.125.107-.156.209-.156.262 0 .828-.672 1.5-1.5 1.5h-2.5c-.828 0-1.5-.672-1.5-1.5 0-.054-.032-.157-.157-.264C2.119 7.156 1.5 5.916 1.5 4.53 1.5 2.034 3.51 0 6.001 0z"
        fill={color}
      />
    </svg>
  );
};

BulbBlankFilled12.category = 'Objects';

export default BulbBlankFilled12;
