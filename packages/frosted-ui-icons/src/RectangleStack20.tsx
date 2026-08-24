import * as React from 'react';
import { IconProps } from './types';

export const RectangleStack20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RectangleStack20"
      {...props}
    >
      <path
        d="M17 12.637c1.519 0 2.75 1.23 2.75 2.75v.909c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.91c0-.69-.56-1.25-1.25-1.25H3c-.69 0-1.25.56-1.25 1.25v.91c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.91c0-1.518 1.231-2.75 2.75-2.75h14zM17 2c1.519 0 2.75 1.231 2.75 2.75v3.363c0 1.52-1.231 2.75-2.75 2.75H3c-1.519 0-2.75-1.23-2.75-2.75V4.75C.25 3.231 1.481 2 3 2h14zM3 3.5c-.69 0-1.25.56-1.25 1.25v3.363c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H3z"
        fill={color}
      />
    </svg>
  );
};

RectangleStack20.category = 'Interface General';

export default RectangleStack20;
