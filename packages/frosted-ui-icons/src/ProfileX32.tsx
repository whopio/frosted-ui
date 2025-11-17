import * as React from 'react';
import { IconProps } from './types';

export const ProfileX32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.6683 21.3333L24.0016 24M24.0016 24L21.3349 26.6666M24.0016 24L21.3349 21.3333M24.0016 24L26.6683 26.6666M15.8048 17.6684C11.3806 17.745 8.0291 20.4077 6.64488 24.1505C6.09981 25.6242 7.35818 27 8.92953 27H16.3349M15.8048 17.6684C15.8701 17.6672 15.9357 17.6666 16.0016 17.6666C16.6951 17.6666 17.3628 17.7298 18.0016 17.8505M15.8048 17.6684C14.938 17.6834 14.1128 17.7977 13.3351 18M21.0016 8.66663C21.0016 11.4281 18.7629 13.6666 16.0016 13.6666C13.2401 13.6666 11.0016 11.4281 11.0016 8.66663C11.0016 5.9052 13.2401 3.66663 16.0016 3.66663C18.7629 3.66663 21.0016 5.9052 21.0016 8.66663Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileX32;
