import * as React from 'react';
import { IconProps } from './types';

export const Menu12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Menu12"
      {...props}
    >
      <path
        d="M11.25 9.5c.414 0 .75.336.75.75s-.336.75-.75.75H.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10.5zm0-4.25c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 6.75 0 6.414 0 6s.336-.75.75-.75h10.5zm0-4.25c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 2.5 0 2.164 0 1.75S.336 1 .75 1h10.5z"
        fill={color}
      />
    </svg>
  );
};

Menu12.category = 'Interface General';

export default Menu12;
