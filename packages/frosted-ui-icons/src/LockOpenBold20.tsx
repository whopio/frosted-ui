import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpenBold20"
      {...props}
    >
      <path
        d="M10 1c2.058 0 3.873 1.036 4.953 2.615C15.383 4.243 14.86 5 14.1 5c-.394 0-.748-.217-.996-.522C12.37 3.576 11.253 3 10 3 7.79 3 6 4.79 6 7v.75h8.5c2.21 0 4 1.79 4 4V15c0 2.21-1.79 4-4 4h-9c-2.21 0-4-1.79-4-4v-3.25c0-1.678 1.034-3.115 2.5-3.708V7c0-3.314 2.686-6 6-6zM5.5 9.75c-1.105 0-2 .895-2 2V15c0 1.105.895 2 2 2h9c1.105 0 2-.895 2-2v-3.25c0-1.105-.895-2-2-2h-9z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBold20.category = 'Security';

export default LockOpenBold20;
