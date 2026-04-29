import * as React from 'react';
import { IconProps } from './types';

export const PauseCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM16 2.5C8.54416 2.5 2.5 8.54416 2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C23.4558 29.5 29.5 23.4558 29.5 16C29.5 8.54416 23.4558 2.5 16 2.5ZM12 9.75C12.5523 9.75 13 10.1977 13 10.75V21.25C12.9999 21.8022 12.5523 22.25 12 22.25C11.4477 22.25 11.0001 21.8022 11 21.25V10.75C11 10.1977 11.4477 9.75 12 9.75ZM20 9.75C20.5523 9.75 21 10.1977 21 10.75V21.25C20.9999 21.8022 20.5523 22.25 20 22.25C19.4477 22.25 19.0001 21.8022 19 21.25V10.75C19 10.1977 19.4477 9.75 20 9.75Z"
        fill={color}
      />
    </svg>
  );
};

PauseCircle32.category = 'Sound & Music';

export default PauseCircle32;
