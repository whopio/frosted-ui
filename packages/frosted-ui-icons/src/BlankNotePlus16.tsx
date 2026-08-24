import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlus16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BlankNotePlus16"
      {...props}
    >
      <path
        d="M11.75 0C14.097 0 16 1.903 16 4.25v4.375c0 .414-.336.75-.75.75s-.75-.336-.75-.75V4.25c0-1.518-1.232-2.75-2.75-2.75h-7.5C2.73 1.5 1.5 2.731 1.5 4.25v7.5c0 1.519 1.231 2.75 2.75 2.75h4.375c.414 0 .75.336.75.75s-.336.75-.75.75H4.25C1.903 16 0 14.097 0 11.75v-7.5C0 1.903 1.903 0 4.25 0h7.5zM13 10c.414 0 .75.336.75.75v1.5h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.5v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-1.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlus16.category = 'Interface General';

export default BlankNotePlus16;
