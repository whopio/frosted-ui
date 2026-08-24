import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zM5.958 8.667c.736 0 1.334.597 1.334 1.333s-.598 1.334-1.334 1.334c-.736 0-1.333-.598-1.333-1.334 0-.736.597-1.333 1.333-1.333zm4.042 0c.736 0 1.334.597 1.334 1.333s-.598 1.334-1.334 1.334c-.736 0-1.333-.598-1.333-1.334 0-.736.597-1.333 1.333-1.333zm4.038 0c.736 0 1.334.597 1.334 1.333s-.598 1.334-1.334 1.334c-.736 0-1.333-.598-1.333-1.334 0-.736.597-1.333 1.333-1.333z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleBold20.category = 'Interface General';

export default ThreeDotsCircleBold20;
