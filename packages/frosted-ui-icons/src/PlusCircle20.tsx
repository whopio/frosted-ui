import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircle20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-.041 4c.414 0 .75.336.75.75v2.459h2.541c.414 0 .75.336.75.75s-.336.75-.75.75h-2.541v2.541c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.541H6.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.459V6.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusCircle20.category = 'Interface General';

export default PlusCircle20;
