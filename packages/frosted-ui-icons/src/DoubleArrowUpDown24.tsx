import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowUpDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowUpDown24"
      {...props}
    >
      <path
        d="M12.22 18.532c-.293-.293-.293-.768 0-1.06.293-.294.768-.294 1.06 0l3.97 3.967V.75c0-.414.335-.75.75-.75.413 0 .75.336.75.75V21.44l3.967-3.968c.293-.293.768-.293 1.06 0 .293.293.293.768 0 1.06L18.53 23.78c-.293.293-.768.293-1.061 0l-5.249-5.248zM.22 6.529c-.293-.293-.293-.768 0-1.06L5.469.22c.293-.293.768-.293 1.06 0l5.249 5.248c.292.293.292.768 0 1.06-.293.294-.768.294-1.06 0L6.748 2.562v20.688c0 .415-.336.75-.75.75s-.75-.335-.75-.75V2.561L1.281 6.529c-.293.293-.768.293-1.061 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowUpDown24.category = 'Arrows';

export default DoubleArrowUpDown24;
