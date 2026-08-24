import * as React from 'react';
import { IconProps } from './types';

export const XCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm0 2c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm1.562 4.466c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L11.356 10l1.62 1.62c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.415 0l-1.62-1.62-1.561 1.563c-.39.39-1.025.39-1.415 0-.39-.391-.39-1.025 0-1.415L8.527 10 6.965 8.438c-.39-.39-.39-1.024 0-1.415.39-.39 1.024-.39 1.415 0L9.94 8.586l1.62-1.62z"
        fill={color}
      />
    </svg>
  );
};

XCircleBold20.category = 'Interface General';

export default XCircleBold20;
