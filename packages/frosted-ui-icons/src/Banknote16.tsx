import * as React from 'react';
import { IconProps } from './types';

export const Banknote16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Banknote16"
      {...props}
    >
      <path
        d="M12.75 1.5C14.545 1.5 16 2.956 16 4.75v6.5c0 1.795-1.455 3.25-3.25 3.25h-9.5C1.455 14.5 0 13.046 0 11.25v-6.5C0 2.956 1.455 1.5 3.25 1.5h9.5zM3.25 3c-.966 0-1.75.784-1.75 1.75v6.5c0 .967.784 1.75 1.75 1.75h9.5c.966 0 1.75-.783 1.75-1.75v-6.5c0-.966-.784-1.75-1.75-1.75h-9.5zm9.25 7.25c.414 0 .75.336.75.75 0 .415-.336.75-.75.75h-1c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75h1zM8 5.5c1.38 0 2.5 1.12 2.5 2.5 0 1.381-1.12 2.5-2.5 2.5S5.5 9.382 5.5 8c0-1.38 1.12-2.5 2.5-2.5zM8 7c-.552 0-1 .448-1 1 0 .553.448 1 1 1s1-.447 1-1c0-.552-.448-1-1-1zM4.5 4.25c.414 0 .75.336.75.75s-.336.75-.75.75h-1c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1z"
        fill={color}
      />
    </svg>
  );
};

Banknote16.category = 'Money & Shopping';

export default Banknote16;
