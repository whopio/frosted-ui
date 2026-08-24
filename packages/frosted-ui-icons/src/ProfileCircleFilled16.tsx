import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleFilled16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 10c-1.758 0-3.295.94-4.14 2.34C4.937 13.367 6.394 14 8 14c1.606 0 3.062-.633 4.139-1.66C11.294 10.94 9.758 10 8 10zm0-6C6.62 4 5.5 5.12 5.5 6.5S6.62 9 8 9s2.5-1.12 2.5-2.5S9.38 4 8 4z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleFilled16.category = 'People';

export default ProfileCircleFilled16;
