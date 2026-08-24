import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleBold20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm.001 14c-1.702 0-2.85 1.03-3.506 2.13 1.046.555 2.239.87 3.505.87 1.267 0 2.46-.316 3.506-.87-.656-1.1-1.803-2.13-3.505-2.13zM10 2.5c-4.142 0-7.5 3.358-7.5 7.5 0 2.156.911 4.099 2.368 5.467.916-1.452 2.575-2.967 5.133-2.967 2.557 0 4.216 1.514 5.132 2.965C16.589 14.097 17.5 12.155 17.5 10c0-4.142-3.358-7.5-7.5-7.5zm0 2c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5S6.5 9.933 6.5 8 8.067 4.5 10 4.5zm0 2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBold20.category = 'People';

export default ProfileCircleBold20;
