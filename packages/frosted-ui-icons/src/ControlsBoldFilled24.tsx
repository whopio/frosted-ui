import * as React from 'react';
import { IconProps } from './types';

export const ControlsBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsBoldFilled24"
      {...props}
    >
      <path
        d="M7.499 13.25c2.28 0 4.184 1.606 4.643 3.75H23c.552 0 1 .447 1 1 0 .551-.448 1-1 1H12.142c-.46 2.142-2.363 3.75-4.643 3.75-2.28-.001-4.184-1.608-4.644-3.75H1c-.552-.001-1-.449-1-1 0-.553.448-1 1-1h1.855c.46-2.144 2.364-3.75 4.644-3.75zm9-12c2.28 0 4.184 1.607 4.644 3.75h1.856c.552 0 1 .448 1 1s-.448 1-1 1h-1.856c-.46 2.143-2.364 3.75-4.644 3.75-2.28 0-4.184-1.607-4.643-3.75H1c-.552 0-1-.448-1-1s.448-1 1-1h10.856c.46-2.143 2.363-3.75 4.643-3.75z"
        fill={color}
      />
    </svg>
  );
};

ControlsBoldFilled24.category = 'Interface General';

export default ControlsBoldFilled24;
