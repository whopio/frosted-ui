import * as React from 'react';
import { IconProps } from './types';

export const Subtract24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Subtract24"
      {...props}
    >
      <path
        d="M22.25 11.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h20.5z"
        fill={color}
      />
    </svg>
  );
};

Subtract24.category = 'Interface General';

export default Subtract24;
