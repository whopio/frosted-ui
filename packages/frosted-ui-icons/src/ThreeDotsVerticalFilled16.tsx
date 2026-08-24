import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalFilled16"
      {...props}
    >
      <path
        d="M6.25 13.25c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75S8.966 15 8 15s-1.75-.784-1.75-1.75zm0-5.25c0-.966.784-1.75 1.75-1.75S9.75 7.034 9.75 8 8.966 9.75 8 9.75 6.25 8.966 6.25 8zm0-5.25C6.25 1.784 7.034 1 8 1s1.75.784 1.75 1.75S8.966 4.5 8 4.5s-1.75-.784-1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled16.category = 'Interface General';

export default ThreeDotsVerticalFilled16;
