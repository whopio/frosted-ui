import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVertical12"
      {...props}
    >
      <path
        d="M4.75 10.25C4.75 9.56 5.31 9 6 9s1.25.56 1.25 1.25S6.69 11.5 6 11.5s-1.25-.56-1.25-1.25zm0-4.25c0-.69.56-1.25 1.25-1.25S7.25 5.31 7.25 6 6.69 7.25 6 7.25 4.75 6.69 4.75 6zm0-4.25C4.75 1.06 5.31.5 6 .5s1.25.56 1.25 1.25S6.69 3 6 3s-1.25-.56-1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical12.category = 'Interface General';

export default ThreeDotsVertical12;
