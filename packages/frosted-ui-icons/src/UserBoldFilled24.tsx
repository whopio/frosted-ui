import * as React from 'react';
import { IconProps } from './types';

export const UserBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.0009 13.5C16.1074 13.5001 20.4077 15.3755 21.997 20.377C22.4427 21.7799 21.3059 22.9998 20.0156 23H3.9863C2.6959 23 1.55907 21.78 2.00486 20.377C3.59421 15.3754 7.89442 13.5 12.0009 13.5ZM12.0009 1C15.0385 1 17.5009 3.46243 17.5009 6.5C17.5009 9.53757 15.0385 12 12.0009 12C8.96338 12 6.50095 9.53757 6.50095 6.5C6.50095 3.46243 8.96338 1 12.0009 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBoldFilled24.category = 'People';

export default UserBoldFilled24;
