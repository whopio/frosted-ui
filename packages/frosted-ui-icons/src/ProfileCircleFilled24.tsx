import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircleFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 14.504c-3.679 0-5.67 2.63-6.59 4.514C7.17 21.062 9.473 22 12 22c2.525 0 4.83-.938 6.59-2.482-.92-1.884-2.911-4.514-6.59-4.514zm0-9c-1.937 0-3.496 1.583-3.496 3.521s1.56 3.52 3.496 3.52c1.937 0 3.496-1.582 3.496-3.52S13.937 6.004 12 6.004z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleFilled24.category = 'People';

export default ProfileCircleFilled24;
