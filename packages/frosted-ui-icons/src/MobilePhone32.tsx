import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MobilePhone32"
      {...props}
    >
      <path
        d="M20.25 1C23.426 1 26 3.574 26 6.75v18.5c0 3.176-2.574 5.75-5.75 5.75h-8.5C8.574 31 6 28.426 6 25.25V6.75C6 3.574 8.574 1 11.75 1h8.5zm-8.5 1.5C9.403 2.5 7.5 4.403 7.5 6.75v18.5c0 2.347 1.903 4.25 4.25 4.25h8.5c2.347 0 4.25-1.903 4.25-4.25V6.75c0-2.347-1.903-4.25-4.25-4.25h-8.5zm7.5 24c.414 0 .75.336.75.75s-.336.75-.75.75h-6.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.5z"
        fill={color}
      />
    </svg>
  );
};

MobilePhone32.category = 'Objects';

export default MobilePhone32;
