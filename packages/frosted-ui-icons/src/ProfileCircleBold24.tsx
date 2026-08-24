import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleBold24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 16.25c-2.596 0-4.12 1.766-4.941 3.365C8.499 20.994 10.19 21.5 12 21.5s3.5-.506 4.94-1.385c-.82-1.599-2.344-3.365-4.94-3.365zM12 2.5c-5.247 0-9.5 4.253-9.5 9.5 0 2.709 1.136 5.15 2.954 6.88 1.04-1.856 3.06-4.13 6.546-4.13s5.505 2.275 6.545 4.132c1.82-1.73 2.955-4.173 2.955-6.882 0-5.247-4.253-9.5-9.5-9.5zm0 3c2.347 0 4.25 1.903 4.25 4.25S14.347 14 12 14s-4.25-1.903-4.25-4.25S9.653 5.5 12 5.5zm0 2c-1.243 0-2.25 1.007-2.25 2.25S10.757 12 12 12s2.25-1.007 2.25-2.25S13.243 7.5 12 7.5z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBold24.category = 'People';

export default ProfileCircleBold24;
