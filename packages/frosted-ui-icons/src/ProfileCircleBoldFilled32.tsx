import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.99707C24.0387 0.997193 30.6005 7.32057 30.9824 15.2646C30.9942 15.5083 31 15.7535 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 15.7534 1.00679 15.5083 1.01855 15.2646C1.40053 7.32052 7.96123 0.997078 16 0.99707ZM16 20.5C11.5173 20.5001 8.88267 23.3644 7.48926 25.8223C9.77003 27.8002 12.744 29 16 29C19.2562 29 22.2299 27.7995 24.5107 25.8213C23.1169 23.3637 20.4824 20.5 16 20.5ZM16 8.25C13.3766 8.25 11.25 10.3766 11.25 13C11.25 15.6234 13.3766 17.75 16 17.75C18.6234 17.75 20.75 15.6234 20.75 13C20.75 10.3766 18.6234 8.25 16 8.25Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBoldFilled32.category = 'People';

export default ProfileCircleBoldFilled32;
