import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseBoldFilled24"
      {...props}
    >
      <path
        d="M12.001 13.5c4.106 0 8.407 1.876 9.996 6.877.446 1.403-.691 2.623-1.981 2.623H3.986c-1.29 0-2.427-1.22-1.981-2.623C3.595 15.375 7.895 13.5 12 13.5zm0-12.5c3.038 0 5.5 2.462 5.5 5.5s-2.463 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5S8.963 1 12.001 1z"
        fill={color}
      />
    </svg>
  );
};

UserWithBaseBoldFilled24.category = 'People';

export default UserWithBaseBoldFilled24;
