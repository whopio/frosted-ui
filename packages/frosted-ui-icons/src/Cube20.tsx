import * as React from 'react';
import { IconProps } from './types';

export const Cube20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.0002 10V17.0834M10.0002 10L3.75 6.4844M10.0002 10L16.0522 6.59564M16.875 7.10758V12.8925C16.875 13.4946 16.5502 14.0499 16.0254 14.3451L10.8171 17.2748C10.3098 17.5602 9.69025 17.5602 9.18292 17.2748L3.97457 14.3451C3.44977 14.0499 3.125 13.4946 3.125 12.8925V7.10758C3.125 6.50547 3.44977 5.95016 3.97457 5.65496L9.18292 2.72527C9.69025 2.43988 10.3098 2.43988 10.8171 2.72527L16.0254 5.65496C16.5502 5.95016 16.875 6.50547 16.875 7.10758Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cube20;
