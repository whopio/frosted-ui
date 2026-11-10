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
        d="M4 4.109V15.89c0 1.633 1.816 2.61 3.18 1.711l8.927-5.89c1.228-.811 1.228-2.613 0-3.423L7.179 2.398C5.816 1.498 4 2.476 4 4.108z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold20.category = 'Sound & Music';

export default PlayBold20;
