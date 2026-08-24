import * as React from 'react';
import { IconProps } from './types';

export const Pause24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pause24"
      {...props}
    >
      <path
        d="M6.5 3.75c.414 0 .75.336.75.75v15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-15c0-.414.336-.75.75-.75zm11 0c.414 0 .75.336.75.75v15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-15c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Pause24.category = 'Sound & Music';

export default Pause24;
