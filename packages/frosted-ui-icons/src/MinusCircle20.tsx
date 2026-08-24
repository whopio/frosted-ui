import * as React from 'react';
import { IconProps } from './types';

export const MinusCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircle20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.25 7.209c.414 0 .75.336.75.75s-.336.75-.75.75h-6.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.5z"
        fill={color}
      />
    </svg>
  );
};

MinusCircle20.category = 'Interface General';

export default MinusCircle20;
