import * as React from 'react';
import { IconProps } from './types';

export const UserBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserBold12"
      {...props}
    >
      <path
        d="M6 7c2.257 0 4.816 1.143 5.47 3.758.133.536-.192 1.078-.728 1.212-.536.133-1.078-.192-1.212-.728C9.184 9.857 7.742 9 6 9c-1.742 0-3.184.857-3.53 2.242-.134.536-.677.861-1.212.728-.536-.134-.862-.677-.728-1.212C1.184 8.143 3.742 7 6 7zm0-7c1.795 0 3.25 1.455 3.25 3.25S7.795 6.5 6 6.5 2.75 5.045 2.75 3.25 4.205 0 6 0zm0 2c-.69 0-1.25.56-1.25 1.25S5.31 4.5 6 4.5s1.25-.56 1.25-1.25S6.69 2 6 2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBold12.category = 'People';

export default UserBold12;
