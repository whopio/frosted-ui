import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircle20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM7.25 7.401c0-1.198 1.335-1.912 2.332-1.248l3.897 2.599c.891.594.891 1.902 0 2.496l-3.897 2.599c-.997.664-2.332-.05-2.332-1.248V7.4zm1.5 5.198L12.648 10 8.75 7.401V12.6z"
        fill={color}
      />
    </svg>
  );
};

PlayCircle20.category = 'Sound & Music';

export default PlayCircle20;
