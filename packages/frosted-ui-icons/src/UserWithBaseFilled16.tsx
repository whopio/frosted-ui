import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseFilled16"
      {...props}
    >
      <path
        d="M8.001 9c2.418 0 4.946 1.163 5.883 4.217.295.963-.486 1.785-1.358 1.785h-9.05c-.872 0-1.653-.822-1.358-1.785l.092-.282C3.213 10.091 5.66 9 8.001 9zm0-7.995c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseFilled16.category = 'People';

export default UserWithBaseFilled16;
