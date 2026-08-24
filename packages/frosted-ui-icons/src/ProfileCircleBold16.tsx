import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zM8 12c-.902 0-1.714.387-2.278 1.006.694.316 1.465.494 2.278.494s1.583-.178 2.277-.494C9.713 12.387 8.901 12 8 12zm0-9.5C4.962 2.5 2.5 4.962 2.5 8c0 1.501.602 2.861 1.577 3.854C5.008 10.724 6.42 10 8 10s2.99.724 3.922 1.854C12.897 10.86 13.5 9.5 13.5 8c0-3.038-2.462-5.5-5.5-5.5zm0 1c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBold16.category = 'People';

export default ProfileCircleBold16;
