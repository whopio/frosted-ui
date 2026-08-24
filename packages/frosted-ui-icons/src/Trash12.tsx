import * as React from 'react';
import { IconProps } from './types';

export const Trash12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Trash12"
      {...props}
    >
      <path
        d="M6.756 0c.773 0 1.455.507 1.677 1.247L8.809 2.5h2.441c.414 0 .75.336.75.75s-.336.75-.75.75h-.595l-.837 6.142C9.725 11.19 8.848 12 7.788 12H4.212c-1.06 0-1.937-.81-2.03-1.858L1.345 4H.75C.336 4 0 3.664 0 3.25s.336-.75.75-.75h2.441l.376-1.253C3.79.507 4.471 0 5.244 0h1.512zM3.668 9.94l.005.054c.018.284.254.506.539.506h3.576c.285 0 .521-.222.54-.506l.004-.055L9.141 4H2.859l.809 5.94zM5.244 1.5c-.11 0-.207.072-.24.178L4.76 2.5H7.24l-.246-.822c-.032-.106-.129-.178-.24-.178h-1.51z"
        fill={color}
      />
    </svg>
  );
};

Trash12.category = 'Interface General';

export default Trash12;
