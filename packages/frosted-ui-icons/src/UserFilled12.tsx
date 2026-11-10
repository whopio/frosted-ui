import * as React from 'react';
import { IconProps } from './types';

export const UserFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserFilled12"
      {...props}
    >
      <path
        d="M6.001 7c1.002 0 2.071.172 3 .704.95.545 1.7 1.435 2.083 2.752.243.834-.429 1.543-1.182 1.544H2.1c-.754 0-1.425-.71-1.182-1.544C1.302 9.14 2.05 8.25 3.001 7.704 3.93 7.172 4.999 7 6.001 7zm0-7c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
        fill={color}
      />
    </svg>
  );
};

UserFilled12.category = 'People';

export default UserFilled12;
