import * as React from 'react';
import { IconProps } from './types';

export const Pause12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pause12"
      {...props}
    >
      <path
        d="M3.5 2c.414 0 .75.336.75.75v6.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75zm5 0c.414 0 .75.336.75.75v6.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Pause12.category = 'Sound & Music';

export default Pause12;
