import * as React from 'react';
import { IconProps } from './types';

export const LogoutBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutBoldFilled12"
      {...props}
    >
      <path
        d="M6.25 0c.989 0 1.888.383 2.558 1.009-.703.045-1.392.333-1.93.87-.326.327-.559.712-.703 1.121H5.5c-1.657 0-3 1.343-3 3s1.343 3 3 3h.675c.144.409.377.794.704 1.121.537.537 1.226.824 1.929.87C8.138 11.615 7.239 12 6.25 12h-2.5C1.679 12 0 10.321 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h2.5zm1.866 3.116c.488-.488 1.28-.488 1.768 0l2 2c.488.488.488 1.28 0 1.768l-2 2c-.488.488-1.28.488-1.768 0-.446-.446-.483-1.144-.114-1.634H5.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2.502c-.369-.49-.332-1.188.114-1.634z"
        fill={color}
      />
    </svg>
  );
};

LogoutBoldFilled12.category = 'Interface General';

export default LogoutBoldFilled12;
