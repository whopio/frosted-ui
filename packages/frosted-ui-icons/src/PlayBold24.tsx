import * as React from 'react';
import { IconProps } from './types';

export const PlayBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBold24"
      {...props}
    >
      <path
        d="M5 19.619V4.36c0-1.84 2.053-2.935 3.58-1.91l11.332 7.597c1.356.909 1.36 2.901.008 3.815L8.588 21.524C7.061 22.557 5 21.462 5 19.62z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold24.category = 'Sound & Music';

export default PlayBold24;
