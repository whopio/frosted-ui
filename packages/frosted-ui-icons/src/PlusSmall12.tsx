import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmall12"
      {...props}
    >
      <path
        d="M6 2c.414 0 .75.336.75.75v2.5h2.5c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.5h-2.5C2.336 6.75 2 6.414 2 6s.336-.75.75-.75h2.5v-2.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall12.category = 'Interface General';

export default PlusSmall12;
