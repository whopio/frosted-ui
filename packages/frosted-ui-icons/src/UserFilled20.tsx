import * as React from 'react';
import { IconProps } from './types';

export const UserFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.0001 11.5C13.2706 11.5 16.6864 12.9923 17.9493 16.9668C18.2943 18.0526 17.4152 18.9998 16.4122 19H3.58801C2.58521 18.9996 1.70602 18.0524 2.0509 16.9668C3.31379 12.9924 6.7297 11.5001 10.0001 11.5ZM9.99523 1C12.4115 1 14.3702 2.95875 14.3702 5.375C14.3702 7.79125 12.4115 9.75 9.99523 9.75C7.57911 9.74986 5.62023 7.79116 5.62023 5.375C5.62023 2.95884 7.57911 1.00014 9.99523 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserFilled20.category = 'People';

export default UserFilled20;
