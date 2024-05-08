import * as React from 'react';
import { IconProps } from './types';

export const ProfileX32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M26.6683 21.3333L24.0016 24M24.0016 24L21.3349 26.6667M24.0016 24L21.3349 21.3333M24.0016 24L26.6683 26.6667M15.8048 17.6684C11.3806 17.7451 8.0291 20.4077 6.64488 24.1505C6.09981 25.6243 7.35818 27 8.92953 27H16.3349M15.8048 17.6684C15.8701 17.6672 15.9357 17.6667 16.0016 17.6667C16.6951 17.6667 17.3628 17.7299 18.0016 17.8505M15.8048 17.6684C14.938 17.6835 14.1128 17.7977 13.3351 18M21.0016 8.66666C21.0016 11.4281 18.7629 13.6667 16.0016 13.6667C13.2401 13.6667 11.0016 11.4281 11.0016 8.66666C11.0016 5.90523 13.2401 3.66666 16.0016 3.66666C18.7629 3.66666 21.0016 5.90523 21.0016 8.66666Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileX32;
