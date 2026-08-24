import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalBold20"
      {...props}
    >
      <path
        d="M3.5 8.25c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm6.5 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75zm6.5 0c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold20.category = 'Interface General';

export default ThreeDotsHorizontalBold20;
