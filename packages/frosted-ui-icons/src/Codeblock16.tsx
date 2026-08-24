import * as React from 'react';
import { IconProps } from './types';

export const Codeblock16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Codeblock16"
      {...props}
    >
      <path
        d="M10.75 1C13.097 1 15 2.903 15 5.25v5.5c0 2.347-1.903 4.25-4.25 4.25h-5.5C2.903 15 1 13.097 1 10.75v-5.5C1 2.903 2.903 1 5.25 1h5.5zm-5.5 1.5C3.731 2.5 2.5 3.731 2.5 5.25v5.5c0 1.519 1.231 2.75 2.75 2.75h5.5c1.519 0 2.75-1.231 2.75-2.75v-5.5c0-1.519-1.231-2.75-2.75-2.75h-5.5zm.72 3.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L5.81 8l1.22 1.22c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L4.36 8.672c-.37-.371-.37-.973 0-1.344L5.97 5.72zm3 0c.293-.293.767-.293 1.06 0l1.609 1.608c.37.371.37.973 0 1.344L10.03 10.28c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L10.19 8 8.97 6.78c-.293-.293-.293-.767 0-1.06z"
        fill={color}
      />
    </svg>
  );
};

Codeblock16.category = 'Code';

export default Codeblock16;
