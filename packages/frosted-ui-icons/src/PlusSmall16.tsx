import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmall16"
      {...props}
    >
      <path
        d="M8 3c.414 0 .75.336.75.75v3.5h3.5c.414 0 .75.336.75.75s-.336.75-.75.75h-3.5v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5h-3.5C3.336 8.75 3 8.414 3 8s.336-.75.75-.75h3.5v-3.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall16.category = 'Interface General';

export default PlusSmall16;
