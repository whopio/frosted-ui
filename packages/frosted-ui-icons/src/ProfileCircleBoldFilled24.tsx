import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 14.504c-3.39 0-5.348 2.233-6.354 4.057C7.329 20.578 9.556 21.5 12 21.5c2.443 0 4.67-.923 6.354-2.439-1.007-1.824-2.964-4.057-6.354-4.057zm0-9c-1.937 0-3.496 1.583-3.496 3.521s1.56 3.52 3.496 3.52c1.937 0 3.496-1.582 3.496-3.52S13.937 6.004 12 6.004z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBoldFilled24.category = 'People';

export default ProfileCircleBoldFilled24;
