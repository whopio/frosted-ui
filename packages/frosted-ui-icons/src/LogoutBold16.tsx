import * as React from 'react';
import { IconProps } from './types';

export const LogoutBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LogoutBold16"
      {...props}
    >
      <path
        d="M7.55 1c1.193 0 2.339.474 3.182 1.318l.225.225c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0l-.225-.225C8.85 3.264 8.213 3 7.55 3H5.5C4.12 3 3 4.12 3 5.5v5C3 11.88 4.12 13 5.5 13h2.05c.663 0 1.3-.264 1.768-.732l.225-.225c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-.225.225C9.89 14.526 8.743 15 7.55 15H5.5C3.015 15 1 12.985 1 10.5v-5C1 3.015 3.015 1 5.5 1h2.05zm3.743 4.293c.39-.39 1.024-.39 1.414 0l2 2c.188.188.293.442.293.707 0 .265-.105.52-.293.707l-2 2c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L11.586 9H8c-.552 0-1-.448-1-1s.448-1 1-1h3.586l-.293-.293c-.39-.39-.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

LogoutBold16.category = 'Interface General';

export default LogoutBold16;
