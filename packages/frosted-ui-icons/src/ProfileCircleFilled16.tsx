import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircleFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 10C6.42435 10 5.02523 10.7542 4.14355 11.9189C5.13628 12.8959 6.49712 13.5 8 13.5C9.50263 13.5 10.8628 12.8956 11.8555 11.9189C10.9738 10.7545 9.57545 10 8 10ZM8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleFilled16.category = 'People';

export default ProfileCircleFilled16;
