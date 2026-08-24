import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalFilled20"
      {...props}
    >
      <path
        d="M8 16.25c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.895 2-2 2s-2-.895-2-2zM8 10c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.895 2-2 2s-2-.895-2-2zm0-6.25c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.895 2-2 2s-2-.895-2-2z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled20.category = 'Interface General';

export default ThreeDotsVerticalFilled20;
