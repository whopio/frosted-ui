import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmall32"
      {...props}
    >
      <path
        d="M16 7c.414 0 .75.336.75.75v7.5h7.5c.414 0 .75.336.75.75s-.336.75-.75.75h-7.5v7.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5v-7.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall32.category = 'Interface General';

export default PlusSmall32;
