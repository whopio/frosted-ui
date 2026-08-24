import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleBoldFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 10c-1.576 0-2.975.754-3.856 1.919C5.136 12.896 6.497 13.5 8 13.5c1.503 0 2.863-.604 3.855-1.581C10.974 10.754 9.575 10 8 10zm0-6C6.62 4 5.5 5.12 5.5 6.5S6.62 9 8 9s2.5-1.12 2.5-2.5S9.38 4 8 4z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBoldFilled16.category = 'People';

export default ProfileCircleBoldFilled16;
