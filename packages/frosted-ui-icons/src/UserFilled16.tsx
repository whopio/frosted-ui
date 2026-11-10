import * as React from 'react';
import { IconProps } from './types';

export const UserFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserFilled16"
      {...props}
    >
      <path
        d="M8.001 9c2.418 0 4.946 1.163 5.883 4.217.295.963-.486 1.785-1.359 1.785H3.477c-.873 0-1.654-.822-1.359-1.785l.092-.282C3.213 10.091 5.659 9 8.001 9zm0-7.995c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z"
        fill={color}
      />
    </svg>
  );
};

UserFilled16.category = 'People';

export default UserFilled16;
