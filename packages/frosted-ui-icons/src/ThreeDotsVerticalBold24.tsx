import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalBold24"
      {...props}
    >
      <path
        d="M10.008 20.015c0-1.105.896-2 2-2s2 .895 2 2c0 1.104-.896 2-2 2s-2-.896-2-2zm0-8.007c0-1.105.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2s-2-.896-2-2zm0-8.023c0-1.104.895-2 2-2 1.104 0 2 .896 2 2 0 1.105-.896 2-2 2s-2-.895-2-2z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold24.category = 'Interface General';

export default ThreeDotsVerticalBold24;
