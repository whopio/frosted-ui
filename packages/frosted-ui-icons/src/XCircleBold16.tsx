import * as React from 'react';
import { IconProps } from './types';

export const XCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircleBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 2C4.962 2.5 2.5 4.962 2.5 8s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S11.038 2.5 8 2.5zm1.185 2.839c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L9.383 7.969l1.216 1.216c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0L7.969 9.383l-1.215 1.216c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.215-1.216L5.34 6.753c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l1.215 1.216 1.216-1.216z"
        fill={color}
      />
    </svg>
  );
};

XCircleBold16.category = 'Interface General';

export default XCircleBold16;
