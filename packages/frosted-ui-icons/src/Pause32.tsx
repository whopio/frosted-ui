import * as React from 'react';
import { IconProps } from './types';

export const Pause32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pause32"
      {...props}
    >
      <path
        d="M9.5 5.75c.414 0 .75.336.75.75v19c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-19c0-.414.336-.75.75-.75zm13 0c.414 0 .75.336.75.75v19c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-19c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Pause32.category = 'Sound & Music';

export default Pause32;
