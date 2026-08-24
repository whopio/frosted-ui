import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVertical24"
      {...props}
    >
      <path
        d="M10.25 19.75c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm0-7.75c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm0-7.75c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S12.966 6 12 6s-1.75-.784-1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVertical24.category = 'Interface General';

export default ThreeDotsVertical24;
