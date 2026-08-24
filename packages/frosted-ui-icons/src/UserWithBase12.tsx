import * as React from 'react';
import { IconProps } from './types';

export const UserWithBase12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBase12"
      {...props}
    >
      <path
        d="M6 7c1.003 0 2.072.172 3 .704.951.545 1.7 1.435 2.084 2.752.243.834-.429 1.543-1.182 1.544H2.1c-.753 0-1.424-.71-1.181-1.544C1.3 9.14 2.05 8.25 3 7.704 3.93 7.172 4.999 7 6 7zm0 1.5c-.847 0-1.63.149-2.254.506-.519.297-.966.76-1.259 1.494h7.027c-.292-.734-.74-1.197-1.258-1.494C7.63 8.648 6.849 8.5 6 8.5zM6 0c1.657 0 3 1.343 3 3S7.658 6 6 6C4.345 6 3 4.657 3 3s1.344-3 3-3zm0 1.5c-.828 0-1.5.672-1.5 1.5S5.173 4.5 6 4.5c.829 0 1.5-.672 1.5-1.5S6.83 1.5 6 1.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBase12.category = 'People';

export default UserWithBase12;
