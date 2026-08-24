import * as React from 'react';
import { IconProps } from './types';

export const Plus24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Plus24"
      {...props}
    >
      <path
        d="M12 1c.414 0 .75.336.75.75v9.5h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5v9.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-9.5h-9.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.5v-9.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Plus24.category = 'Interface General';

export default Plus24;
