import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseBold24"
      {...props}
    >
      <path
        d="M12 13.5c4.107 0 8.408 1.876 9.997 6.877.446 1.403-.691 2.623-1.981 2.623H3.986c-1.29 0-2.427-1.22-1.981-2.623C3.595 15.375 7.895 13.5 12 13.5zm0 2c-3.513 0-6.834 1.55-8.086 5.473.011.011.034.027.072.027h16.03c.038 0 .06-.016.07-.027-1.25-3.924-4.571-5.473-8.085-5.473zM12 1c3.039 0 5.5 2.462 5.5 5.5S15.04 12 12 12c-3.037 0-5.5-2.462-5.5-5.5S8.964 1 12 1zm0 2c-1.932 0-3.5 1.567-3.5 3.5S10.069 10 12 10c1.934 0 3.5-1.567 3.5-3.5S13.935 3 12 3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseBold24.category = 'People';

export default UserWithBaseBold24;
