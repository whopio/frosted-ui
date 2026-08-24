import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsCircleFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM5.958 8.917c-.598 0-1.083.485-1.083 1.083s.485 1.084 1.083 1.084S7.042 10.598 7.042 10c0-.598-.486-1.083-1.084-1.083zm4.042 0c-.598 0-1.083.485-1.083 1.083s.485 1.084 1.083 1.084 1.084-.486 1.084-1.084c0-.598-.486-1.083-1.084-1.083zm4.038 0c-.598 0-1.083.485-1.083 1.083s.485 1.084 1.083 1.084 1.084-.486 1.084-1.084c0-.598-.486-1.083-1.084-1.083z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleFilled20.category = 'Interface General';

export default ThreeDotsCircleFilled20;
