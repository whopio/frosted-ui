import * as React from 'react';
import { IconProps } from './types';

export const LogoutBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutBold32"
      {...props}
    >
      <path
        d="M14.144 1c2.254 0 4.416.895 6.01 2.49l.553.553c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0l-.554-.553C17.52 3.685 15.867 3 14.144 3H9.5C5.91 3 3 5.91 3 9.5v13C3 26.09 5.91 29 9.5 29h4.451c1.822 0 3.56-.765 4.791-2.107l.52-.569c.374-.407 1.007-.434 1.414-.061.407.373.434 1.006.061 1.413l-.52.567C18.607 30 16.334 31 13.95 31H9.5C4.806 31 1 27.194 1 22.5v-13C1 4.806 4.806 1 9.5 1h4.644zm9.899 9.043c.39-.39 1.024-.39 1.414 0l5.25 5.25c.188.188.293.442.293.707 0 .265-.105.52-.293.707l-5.25 5.25c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L27.586 17H16c-.552 0-1-.448-1-1s.448-1 1-1h11.586l-3.543-3.543c-.39-.39-.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

LogoutBold32.category = 'Interface General';

export default LogoutBold32;
