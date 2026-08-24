import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseFilled12"
      {...props}
    >
      <path
        d="M6 7c1.003 0 2.072.172 3 .704.951.545 1.7 1.435 2.084 2.752.243.834-.429 1.543-1.182 1.544H2.1c-.753 0-1.424-.71-1.181-1.544C1.3 9.14 2.05 8.25 3 7.704 3.93 7.172 4.999 7 6 7zm0-7c1.657 0 3 1.343 3 3S7.658 6 6 6C4.345 6 3 4.657 3 3s1.344-3 3-3z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseFilled12.category = 'People';

export default UserWithBaseFilled12;
