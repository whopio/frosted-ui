import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalFilled12"
      {...props}
    >
      <path
        d="M4.25 10.25c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S6.966 12 6 12s-1.75-.784-1.75-1.75zm0-4.25c0-.966.784-1.75 1.75-1.75S7.75 5.034 7.75 6 6.966 7.75 6 7.75 4.25 6.966 4.25 6zm0-4.25C4.25.784 5.034 0 6 0s1.75.784 1.75 1.75S6.966 3.5 6 3.5s-1.75-.784-1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled12.category = 'Interface General';

export default ThreeDotsVerticalFilled12;
