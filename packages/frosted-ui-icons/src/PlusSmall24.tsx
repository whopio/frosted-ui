import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmall24"
      {...props}
    >
      <path
        d="M12 5c.414 0 .75.336.75.75v5.5h5.5c.414 0 .75.336.75.75s-.336.75-.75.75h-5.5v5.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.5h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5v-5.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall24.category = 'Interface General';

export default PlusSmall24;
