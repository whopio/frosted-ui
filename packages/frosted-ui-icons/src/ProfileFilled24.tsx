import * as React from 'react';
import { IconProps } from './types';

export const ProfileFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.001 12.5C15.7226 12.5 18.5651 14.7257 19.7217 17.8525C20.0281 18.681 19.82 19.4954 19.3311 20.0781C18.8525 20.6483 18.1095 20.9999 17.3047 21H6.69824C5.89326 20.9999 5.14948 20.6485 4.6709 20.0781C4.18202 19.4954 3.9739 18.681 4.28027 17.8525C5.43677 14.7257 8.27954 12.5001 12.001 12.5ZM12.001 2C14.4863 2.00001 16.501 4.01473 16.501 6.5C16.501 8.98527 14.4863 11 12.001 11C9.51592 10.9998 7.50098 8.98513 7.50098 6.5C7.50098 4.01487 9.51592 2.00025 12.001 2Z"
        fill={color}
      />
    </svg>
  );
};

ProfileFilled24.category = 'People';

export default ProfileFilled24;
