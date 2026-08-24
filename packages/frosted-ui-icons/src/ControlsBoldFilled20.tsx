import * as React from 'react';
import { IconProps } from './types';

export const ControlsBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsBoldFilled20"
      {...props}
    >
      <path
        d="M6.75 11c1.864 0 3.43 1.275 3.874 3H19c.552 0 1 .448 1 1s-.448 1-1 1h-8.376c-.444 1.725-2.01 3-3.874 3-1.864 0-3.43-1.275-3.874-3H1c-.552 0-1-.448-1-1s.448-1 1-1h1.876c.444-1.725 2.01-3 3.874-3zm6.5-10c1.864 0 3.43 1.275 3.874 3H19c.552 0 1 .448 1 1s-.448 1-1 1h-1.876c-.444 1.725-2.01 3-3.874 3-1.864 0-3.43-1.275-3.874-3H1c-.552 0-1-.448-1-1s.448-1 1-1h8.376c.444-1.725 2.01-3 3.874-3z"
        fill={color}
      />
    </svg>
  );
};

ControlsBoldFilled20.category = 'Interface General';

export default ControlsBoldFilled20;
