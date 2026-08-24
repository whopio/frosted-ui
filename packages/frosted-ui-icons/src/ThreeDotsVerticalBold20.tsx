import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalBold20"
      {...props}
    >
      <path
        d="M8.25 16.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm0-6.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm0-6.5c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold20.category = 'Interface General';

export default ThreeDotsVerticalBold20;
