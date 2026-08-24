import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseBold12"
      {...props}
    >
      <path
        d="M6 7c2.027 0 4.27.908 5.203 2.985.49 1.09-.441 2.015-1.344 2.015H2.141c-.902 0-1.833-.926-1.344-2.015C1.73 7.908 3.973 7 6 7zm0 2c-1.129 0-2.142.368-2.802 1h5.604C8.142 9.368 7.129 9 6 9zm0-9c1.795 0 3.25 1.455 3.25 3.25S7.795 6.5 6 6.5 2.75 5.045 2.75 3.25 4.205 0 6 0zm0 2c-.69 0-1.25.56-1.25 1.25S5.31 4.5 6 4.5s1.25-.56 1.25-1.25S6.69 2 6 2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseBold12.category = 'People';

export default UserWithBaseBold12;
