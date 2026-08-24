import * as React from 'react';
import { IconProps } from './types';

export const Menu20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Menu20"
      {...props}
    >
      <path
        d="M18.25 15.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16.5zm0-6.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16.5zm0-6.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75S1.336 3 1.75 3h16.5z"
        fill={color}
      />
    </svg>
  );
};

Menu20.category = 'Interface General';

export default Menu20;
