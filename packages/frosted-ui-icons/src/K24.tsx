import * as React from 'react';
import { IconProps } from './types';

export const K24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="K24"
      {...props}
    >
      <path
        d="M17.157 2.22c.293-.293.768-.293 1.06 0 .294.293.294.767 0 1.06L9.499 12l8.72 8.72c.293.293.293.767 0 1.06-.293.293-.768.293-1.06 0l-8.72-8.72L7 14.498v6.752c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v9.627L17.157 2.22z"
        fill={color}
      />
    </svg>
  );
};

K24.category = 'Text Formatting';

export default K24;
