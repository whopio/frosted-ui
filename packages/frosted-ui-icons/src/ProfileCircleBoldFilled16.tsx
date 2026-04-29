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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 10C6.4243 10 5.02523 10.7542 4.14355 11.9189C5.13628 12.8959 6.49712 13.5 8 13.5C9.50263 13.5 10.8628 12.8956 11.8555 11.9189C10.9738 10.7545 9.57547 10 8 10ZM8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircleBoldFilled16.category = 'People';

export default ProfileCircleBoldFilled16;
