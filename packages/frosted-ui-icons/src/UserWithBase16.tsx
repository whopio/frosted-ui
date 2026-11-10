import * as React from 'react';
import { IconProps } from './types';

export const UserWithBase16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBase16"
      {...props}
    >
      <path
        d="M8.001 9c2.418 0 4.946 1.163 5.883 4.217.295.963-.486 1.785-1.359 1.785H3.477c-.873 0-1.654-.822-1.359-1.785l.092-.282C3.213 10.091 5.659 9 8.001 9zm0 1.5c-1.886 0-3.667.843-4.398 3.002h8.796c-.731-2.16-2.512-3.002-4.398-3.002zm0-9.495c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5zm0 1.5c-1.105 0-2 .895-2 2 0 1.104.895 2 2 2 1.104 0 2-.896 2-2 0-1.105-.896-2-2-2z"
        fill={color}
      />
    </svg>
  );
};

UserWithBase16.category = 'People';

export default UserWithBase16;
