import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25ZM12 22.25C14.5654 22.25 16.9107 21.3076 18.7085 19.75C16.9107 18.1925 14.5655 17.25 12.0001 17.25C9.43471 17.25 7.08944 18.1925 5.29164 19.75C7.08944 21.3076 9.43462 22.25 12 22.25ZM15.25 10.5C15.25 12.2949 13.7949 13.75 12 13.75C10.2051 13.75 8.75 12.2949 8.75 10.5C8.75 8.70507 10.2051 7.25 12 7.25C13.7949 7.25 15.25 8.70507 15.25 10.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileCircle24;
