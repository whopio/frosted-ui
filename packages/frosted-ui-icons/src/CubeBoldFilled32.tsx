import * as React from 'react';
import { IconProps } from './types';

export const CubeBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeBoldFilled32"
      {...props}
    >
      <path
        d="M12.999 1.732c1.856-1.071 4.144-1.071 6 0l7.857 4.536c1.856 1.072 3 3.052 3 5.196v9.072c0 2.144-1.144 4.124-3 5.196l-7.857 4.536c-1.856 1.072-4.144 1.072-6 0l-7.856-4.536c-1.857-1.072-3-3.052-3-5.196v-9.072c0-2.144 1.143-4.124 3-5.196l7.856-4.536zm12.618 8.772c-.274-.48-.885-.646-1.364-.372l-8.254 4.716-8.254-4.716c-.48-.274-1.09-.108-1.364.372s-.108 1.09.372 1.364l8.246 4.712V26c0 .552.448 1 1 1s1-.448 1-1v-9.42l8.246-4.712c.48-.274.646-.885.372-1.364z"
        fill={color}
      />
    </svg>
  );
};

CubeBoldFilled32.category = 'Objects';

export default CubeBoldFilled32;
