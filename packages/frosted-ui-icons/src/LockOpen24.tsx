import * as React from 'react';
import { IconProps } from './types';

export const LockOpen24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpen24"
      {...props}
    >
      <path
        d="M12 1c2.87 0 5.364 1.613 6.624 3.982.255.48-.122 1.018-.665 1.018-.308 0-.583-.182-.734-.45C16.195 3.73 14.24 2.5 12 2.5c-3.314 0-6 2.686-6 6V10h12.25c2.347 0 4.25 1.903 4.25 4.25v4.5c0 2.347-1.903 4.25-4.25 4.25H5.75c-2.347 0-4.25-1.903-4.25-4.25v-4.5c0-1.912 1.263-3.53 3-4.063V8.5C4.5 4.358 7.858 1 12 1zM5.75 11.5C4.231 11.5 3 12.731 3 14.25v4.5c0 1.519 1.231 2.75 2.75 2.75h12.5c1.519 0 2.75-1.231 2.75-2.75v-4.5c0-1.519-1.231-2.75-2.75-2.75H5.75z"
        fill={color}
      />
    </svg>
  );
};

LockOpen24.category = 'Security';

export default LockOpen24;
