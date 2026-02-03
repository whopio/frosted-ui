import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM11.75 5.25C11.3358 5.25 11.0001 5.58583 11 6V12.5C11 12.7301 11.1061 12.9477 11.2871 13.0898L14.7861 15.8398C15.1118 16.0958 15.5839 16.0386 15.8398 15.7129C16.0954 15.3872 16.0385 14.916 15.7129 14.6602L12.5 12.1357V6C12.4999 5.58583 12.1642 5.25 11.75 5.25Z"
        fill={color}
      />
    </svg>
  );
};

export default ClockFilled24;
