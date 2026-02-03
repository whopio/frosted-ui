import * as React from 'react';
import { IconProps } from './types';

export const UserFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.001 11.75C13.6772 11.7501 16.8739 13.8595 17.9072 17.0508C18.1686 17.8584 17.9329 18.6261 17.4443 19.1641C16.9682 19.6883 16.2548 19.9999 15.501 20H4.50098C3.74708 20 3.03383 19.6883 2.55762 19.1641C2.06897 18.626 1.83327 17.8586 2.09473 17.0508C3.12807 13.8594 6.32463 11.75 10.001 11.75ZM10.001 0C12.9003 0.000181811 15.251 2.35062 15.251 5.25C15.2508 8.14924 12.9002 10.4998 10.001 10.5C7.10158 10.5 4.75114 8.14935 4.75098 5.25C4.75098 2.35051 7.10148 0 10.001 0Z"
        fill={color}
      />
    </svg>
  );
};

export default UserFilled20;
