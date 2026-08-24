import * as React from 'react';
import { IconProps } from './types';

export const XCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XCircle20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1.738 5.143c.293-.293.768-.293 1.06 0 .294.292.294.767 0 1.06L11.003 10l1.797 1.797c.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0L9.94 11.061 8.203 12.8c-.293.293-.769.293-1.061 0-.293-.293-.293-.769 0-1.062L8.88 10 7.14 8.262c-.292-.293-.292-.769 0-1.062.293-.293.77-.293 1.062 0l1.738 1.74 1.797-1.797z"
        fill={color}
      />
    </svg>
  );
};

XCircle20.category = 'Interface General';

export default XCircle20;
