import * as React from 'react';
import { IconProps } from './types';

export const Ban32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Ban32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM6.645 26.415C9.124 28.644 12.404 30 16 30c7.732 0 14-6.268 14-14 0-3.596-1.356-6.876-3.585-9.355l-19.77 19.77zM16 2C8.268 2 2 8.268 2 16c0 3.596 1.356 6.875 3.584 9.355l19.77-19.771C22.876 3.356 19.597 2 16 2z"
        fill={color}
      />
    </svg>
  );
};

Ban32.category = 'Interface General';

export default Ban32;
