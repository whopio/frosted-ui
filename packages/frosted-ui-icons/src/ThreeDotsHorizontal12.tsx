import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontal12"
      {...props}
    >
      <path
        d="M1.75 4.75C2.44 4.75 3 5.31 3 6s-.56 1.25-1.25 1.25S.5 6.69.5 6s.56-1.25 1.25-1.25zm4.25 0c.69 0 1.25.56 1.25 1.25S6.69 7.25 6 7.25 4.75 6.69 4.75 6 5.31 4.75 6 4.75zm4.25 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S9 6.69 9 6s.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal12.category = 'Interface General';

export default ThreeDotsHorizontal12;
