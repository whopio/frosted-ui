import * as React from 'react';
import { IconProps } from './types';

export const UserBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserBold16"
      {...props}
    >
      <path
        d="M8 9c1.312 0 2.687.306 3.839 1.08 1.174.787 2.05 2.02 2.391 3.724.109.541-.242 1.068-.784 1.176-.54.109-1.068-.242-1.176-.784-.242-1.203-.824-1.972-1.546-2.457C9.98 11.24 9.02 11 8 11c-1.02 0-1.98.24-2.724.74-.721.484-1.304 1.253-1.545 2.456-.11.542-.636.893-1.177.784-.541-.108-.893-.635-.784-1.176.342-1.705 1.218-2.937 2.391-3.725C5.313 9.306 6.688 9 8.001 9zm0-8c1.933 0 3.5 1.567 3.5 3.5S9.933 8 8 8 4.5 6.433 4.5 4.5 6.067 1 8 1zm0 2c-.828 0-1.5.672-1.5 1.5S7.172 6 8 6c.829 0 1.5-.672 1.5-1.5S8.83 3 8 3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBold16.category = 'People';

export default UserBold16;
