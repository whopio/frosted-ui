import * as React from 'react';
import { IconProps } from './types';

export const ClockBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ClockBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm0 2c.552 0 1 .448 1 1v4.519l2.125 1.7c.431.345.501.975.156 1.406-.345.431-.975.501-1.406.156l-2.5-2-.084-.076C9.106 11.02 9 10.765 9 10.5v-5c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

ClockBold20.category = 'Interface General';

export default ClockBold20;
