import * as React from 'react';
import { IconProps } from './types';

export const XCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircle32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm3.889 9.05c.293-.293.768-.293 1.061 0 .293.293.293.768 0 1.061L17.06 16l3.89 3.889c.293.293.293.768 0 1.061-.293.293-.768.293-1.061 0L16 17.06l-3.889 3.89c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061L14.94 16l-3.89-3.889c-.293-.293-.293-.768 0-1.061.293-.293.768-.293 1.061 0L16 14.94l3.889-3.89z"
        fill={color}
      />
    </svg>
  );
};

XCircle32.category = 'Interface General';

export default XCircle32;
