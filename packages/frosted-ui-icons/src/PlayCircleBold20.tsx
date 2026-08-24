import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zM7 7.401C7 6.004 8.558 5.17 9.72 5.945l3.898 2.599c1.04.693 1.04 2.22 0 2.912l-3.897 2.599C8.558 14.83 7 13.996 7 12.599V7.4zm2 4.73L12.196 10 9 7.868v4.263z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBold20.category = 'Sound & Music';

export default PlayCircleBold20;
