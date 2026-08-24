import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseBoldFilled12"
      {...props}
    >
      <path
        d="M6 7c2.027 0 4.27.908 5.203 2.985.49 1.09-.441 2.015-1.344 2.015H2.141c-.902 0-1.833-.926-1.344-2.015C1.73 7.908 3.973 7 6 7zm0-7c1.795 0 3.25 1.455 3.25 3.25S7.795 6.5 6 6.5 2.75 5.045 2.75 3.25 4.205 0 6 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseBoldFilled12.category = 'People';

export default UserWithBaseBoldFilled12;
