import * as React from 'react';
import { IconProps } from './types';

export const LockBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockBold24"
      {...props}
    >
      <path
        d="M12 1c4.418 0 8 3.582 8 8v1.218c1.482.736 2.5 2.265 2.5 4.032v4.25c0 2.485-2.015 4.5-4.5 4.5H6c-2.485 0-4.5-2.015-4.5-4.5v-4.25c0-1.767 1.018-3.296 2.5-4.032V9c0-4.418 3.582-8 8-8zM6 11.75c-1.38 0-2.5 1.12-2.5 2.5v4.25C3.5 19.88 4.62 21 6 21h12c1.38 0 2.5-1.12 2.5-2.5v-4.25c0-1.38-1.12-2.5-2.5-2.5H6zM12 3C8.686 3 6 5.686 6 9v.75h12V9c0-3.314-2.686-6-6-6z"
        fill={color}
      />
    </svg>
  );
};

LockBold24.category = 'Security';

export default LockBold24;
