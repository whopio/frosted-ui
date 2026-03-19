import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 10C6.60448 10 5.34851 10.5926 4.4668 11.5371C5.37146 12.4408 6.62028 13 8 13C9.37947 13 10.6276 12.4405 11.5322 11.5371C10.6505 10.5929 9.39529 10 8 10ZM8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBoldFilled16.category = 'People';

export default ProfileCircleBoldFilled16;
