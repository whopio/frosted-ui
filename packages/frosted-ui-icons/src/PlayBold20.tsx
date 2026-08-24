import * as React from 'react';
import { IconProps } from './types';

export const PlayBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBold20"
      {...props}
    >
      <path
        d="M4 15.891V4.11c0-1.633 1.816-2.61 3.18-1.711l8.927 5.89c1.228.811 1.228 2.613 0 3.423l-8.928 5.891c-1.363.9-3.179-.078-3.179-1.71z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold20.category = 'Sound & Music';

export default PlayBold20;
