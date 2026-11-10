import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrashFilled32"
      {...props}
    >
      <path
        d="M25.311 26.743C25.025 29.171 22.968 31 20.523 31h-9.046c-2.445 0-4.502-1.83-4.789-4.257L4.653 9.5h22.694L25.31 26.743zM16 1c2.574 0 4.896 1.547 5.888 3.922l.659 1.578h6.703c.414 0 .75.336.75.75s-.336.75-.75.75H2.75C2.336 8 2 7.664 2 7.25s.336-.75.75-.75h6.704l.66-1.578C11.104 2.547 13.426 1 16 1zm0 1.5c-1.968 0-3.744 1.183-4.503 2.999L11.08 6.5h9.842l-.418-1.001C19.744 3.683 17.968 2.5 16 2.5z"
        fill={color}
      />
    </svg>
  );
};

TrashFilled32.category = 'Interface General';

export default TrashFilled32;
