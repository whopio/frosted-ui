import * as React from 'react';
import { IconProps } from './types';

export const XCircleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircleBold32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 2C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5zm3.712 8.373c.39-.39 1.024-.39 1.415 0 .39.39.39 1.025 0 1.415L17.414 16l3.713 3.712c.39.39.39 1.024 0 1.415-.39.39-1.025.39-1.415 0L16 17.414l-3.712 3.713c-.39.39-1.024.39-1.415 0-.39-.39-.39-1.025 0-1.415L14.586 16l-3.713-3.712c-.39-.39-.39-1.024 0-1.415.39-.39 1.025-.39 1.415 0L16 14.586l3.712-3.713z"
        fill={color}
      />
    </svg>
  );
};

XCircleBold32.category = 'Interface General';

export default XCircleBold32;
