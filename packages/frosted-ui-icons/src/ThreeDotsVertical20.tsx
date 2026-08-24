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
      data-fui-icon="ThreeDotsVertical20"
      {...props}
    >
      <path
        d="M8.5 16.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S10.828 18 10 18s-1.5-.672-1.5-1.5zm0-6.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm0-6.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S10.828 5 10 5s-1.5-.672-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical20.category = 'Interface General';

export default ThreeDotsVertical20;
