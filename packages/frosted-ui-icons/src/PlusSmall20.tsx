import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmall20"
      {...props}
    >
      <path
        d="M10 4c.414 0 .75.336.75.75v4.5h4.5c.414 0 .75.336.75.75s-.336.75-.75.75h-4.5v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5v-4.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall20.category = 'Interface General';

export default PlusSmall20;
