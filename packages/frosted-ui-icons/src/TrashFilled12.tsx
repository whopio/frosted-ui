import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrashFilled12"
      {...props}
    >
      <path
        d="M9.878 5.5c.303 0 .537.267.496.567l-.556 4.075C9.725 11.19 8.848 12 7.788 12H4.212c-1.06 0-1.937-.81-2.03-1.858l-.556-4.075c-.04-.3.193-.567.496-.567h7.756zM6.756 0c.773 0 1.455.507 1.677 1.247L8.809 2.5h2.441c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 4 0 3.664 0 3.25s.336-.75.75-.75h2.441l.376-1.253C3.79.507 4.471 0 5.244 0h1.512zM5.244 1.5c-.11 0-.207.072-.24.178L4.76 2.5H7.24l-.246-.822c-.032-.106-.129-.178-.24-.178h-1.51z"
        fill={color}
      />
    </svg>
  );
};

TrashFilled12.category = 'Interface General';

export default TrashFilled12;
