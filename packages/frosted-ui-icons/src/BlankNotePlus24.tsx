import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlus24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BlankNotePlus24"
      {...props}
    >
      <path
        d="M16.25 0C20.53 0 24 3.47 24 7.75v6.875c0 .414-.336.75-.75.75s-.75-.336-.75-.75V7.75c0-3.452-2.798-6.25-6.25-6.25h-8.5C4.298 1.5 1.5 4.298 1.5 7.75v8.5c0 3.452 2.798 6.25 6.25 6.25h6.875c.414 0 .75.336.75.75s-.336.75-.75.75H7.75C3.47 24 0 20.53 0 16.25v-8.5C0 3.47 3.47 0 7.75 0h8.5zm3.5 15.5c.414 0 .75.336.75.75V19h2.75c.414 0 .75.336.75.75s-.336.75-.75.75H20.5v2.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V20.5h-2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H19v-2.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlus24.category = 'Interface General';

export default BlankNotePlus24;
