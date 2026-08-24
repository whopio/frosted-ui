import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleFilled32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM9.75 15.25c-.414 0-.75.336-.75.75s.336.75.75.75h12.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H9.75z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleFilled32.category = 'Interface General';

export default MinusCircleFilled32;
