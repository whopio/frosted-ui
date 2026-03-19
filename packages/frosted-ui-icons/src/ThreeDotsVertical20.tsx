import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.5 16.5C8.5 15.6716 9.17157 15 10 15C10.8284 15 11.5 15.6716 11.5 16.5C11.5 17.3284 10.8284 18 10 18C9.17157 18 8.5 17.3284 8.5 16.5ZM8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10ZM8.5 3.5C8.5 2.67157 9.17157 2 10 2C10.8284 2 11.5 2.67157 11.5 3.5C11.5 4.32843 10.8284 5 10 5C9.17157 5 8.5 4.32843 8.5 3.5Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical20.category = 'Product Icons';

export default ThreeDotsVertical20;
