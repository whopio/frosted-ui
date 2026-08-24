import * as React from 'react';
import { IconProps } from './types';

export const CopyBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CopyBold24"
      {...props}
    >
      <path
        d="M19.4 7c1.988 0 3.6 1.612 3.6 3.6v8.8c0 1.988-1.612 3.6-3.6 3.6h-8.8C8.612 23 7 21.388 7 19.4v-8.8C7 8.612 8.612 7 10.6 7h8.8zm-8.8 2C9.716 9 9 9.716 9 10.6v8.8c0 .884.716 1.6 1.6 1.6h8.8c.884 0 1.6-.716 1.6-1.6v-8.8c0-.884-.716-1.6-1.6-1.6h-8.8zm2.8-8C15.388 1 17 2.612 17 4.6c0 .22-.18.4-.4.4h-1.2c-.22 0-.4-.18-.4-.4 0-.884-.716-1.6-1.6-1.6H4.6C3.716 3 3 3.716 3 4.6v8.8c0 .884.716 1.6 1.6 1.6.22 0 .4.18.4.4v1.2c0 .22-.18.4-.4.4C2.612 17 1 15.388 1 13.4V4.6C1 2.612 2.612 1 4.6 1h8.8z"
        fill={color}
      />
    </svg>
  );
};

CopyBold24.category = 'Interface General';

export default CopyBold24;
