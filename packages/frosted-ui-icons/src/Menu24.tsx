import * as React from 'react';
import { IconProps } from './types';

export const Menu24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Menu24"
      {...props}
    >
      <path
        d="M22.25 18.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h20.5zm0-7.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h20.5zm0-7.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75S1.336 4 1.75 4h20.5z"
        fill={color}
      />
    </svg>
  );
};

Menu24.category = 'Interface General';

export default Menu24;
