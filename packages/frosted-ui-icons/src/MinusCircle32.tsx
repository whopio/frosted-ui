import * as React from 'react';
import { IconProps } from './types';

export const MinusCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircle32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm6.25 13.25c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.5z"
        fill={color}
      />
    </svg>
  );
};

MinusCircle32.category = 'Interface General';

export default MinusCircle32;
