import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 30.25C23.8701 30.25 30.25 23.8701 30.25 16C30.25 8.12994 23.8701 1.75 16 1.75C8.12994 1.75 1.75 8.12994 1.75 16C1.75 23.8701 8.12994 30.25 16 30.25ZM16 30.25C19.5799 30.25 22.8514 28.9299 25.3544 26.75C22.8514 24.5701 19.5799 23.25 16 23.25C12.4201 23.25 9.14853 24.5701 6.64551 26.75C9.14853 28.9299 12.4201 30.25 16 30.25ZM20.75 14C20.75 16.6234 18.6234 18.75 16 18.75C13.3766 18.75 11.25 16.6234 11.25 14C11.25 11.3766 13.3766 9.25 16 9.25C18.6234 9.25 20.75 11.3766 20.75 14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileCircle32;
