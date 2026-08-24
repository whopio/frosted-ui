import * as React from 'react';
import { IconProps } from './types';

export const Clock20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Clock20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-.25 2.25c.414 0 .75.336.75.75v5.118l2.441 1.776c.335.243.409.713.165 1.047-.243.335-.713.409-1.047.165l-2.75-2-.069-.056c-.152-.141-.24-.34-.24-.55V5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Clock20.category = 'Interface General';

export default Clock20;
