import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleBoldFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm.001 11.998c-2.563 0-4.192 1.59-5.047 3.052C6.286 16.762 8.057 17.5 10 17.5c1.944 0 3.714-.74 5.047-1.952-.856-1.462-2.484-3.05-5.046-3.05zm.001-7.493c-1.656 0-2.998 1.342-2.998 2.998C7.004 9.658 8.346 11 10.002 11c1.655 0 2.998-1.343 2.998-2.998 0-1.656-1.343-2.998-2.998-2.998z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBoldFilled20.category = 'People';

export default ProfileCircleBoldFilled20;
