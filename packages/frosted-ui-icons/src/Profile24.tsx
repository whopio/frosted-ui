import * as React from 'react';
import { IconProps } from './types';

export const Profile24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.7511 6.5C15.7511 8.57107 14.0722 10.25 12.0011 10.25 9.93003 10.25 8.2511 8.57107 8.2511 6.5 8.2511 4.42893 9.93003 2.75 12.0011 2.75 14.0722 2.75 15.7511 4.42893 15.7511 6.5zM12.0011 13.25C8.60997 13.25 6.03711 15.2643 4.9836 18.1129 4.5748 19.2182 5.51944 20.25 6.69796 20.25H17.3043C18.4828 20.25 19.4274 19.2182 19.0186 18.1129 17.9651 15.2643 15.3923 13.25 12.0011 13.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Profile24;
