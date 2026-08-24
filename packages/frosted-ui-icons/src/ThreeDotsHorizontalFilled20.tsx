import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalFilled20"
      {...props}
    >
      <path
        d="M3.75 8c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2-.895-2-2s.895-2 2-2zM10 8c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2-.895-2-2s.895-2 2-2zm6.25 0c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2-.895-2-2s.895-2 2-2z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalFilled20.category = 'Interface General';

export default ThreeDotsHorizontalFilled20;
