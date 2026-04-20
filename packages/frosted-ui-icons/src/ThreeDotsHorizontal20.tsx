import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 8.5C4.32843 8.5 5 9.17157 5 10C5 10.8284 4.32843 11.5 3.5 11.5C2.67157 11.5 2 10.8284 2 10C2 9.17157 2.67157 8.5 3.5 8.5ZM10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5ZM16.5 8.5C17.3284 8.5 18 9.17157 18 10C18 10.8284 17.3284 11.5 16.5 11.5C15.6716 11.5 15 10.8284 15 10C15 9.17157 15.6716 8.5 16.5 8.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal20.category = 'Interface General';

export default ThreeDotsHorizontal20;
