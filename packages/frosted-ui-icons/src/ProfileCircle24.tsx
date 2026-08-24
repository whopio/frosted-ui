import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircle24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 16c-2.914 0-4.528 2.12-5.32 3.822-.018.037-.039.072-.06.105C8.172 21.42 10.017 22 12 22c1.981 0 3.826-.58 5.38-1.573-.022-.033-.043-.068-.06-.105C16.527 18.62 14.914 16.5 12 16.5zM12 2C6.477 2 2 6.477 2 12c0 2.996 1.319 5.682 3.405 7.515C6.326 17.63 8.32 15 12 15c3.68 0 5.673 2.63 6.594 4.515C20.68 17.682 22 14.995 22 12c0-5.523-4.477-10-10-10zm0 3.75c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircle24.category = 'People';

export default ProfileCircle24;
