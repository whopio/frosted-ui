import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15 1C17.7614 1 20 3.23858 20 6V18C20 20.7614 17.7614 23 15 23H9C6.23858 23 4 20.7614 4 18V6C4 3.23858 6.23858 1 9 1H15ZM9 3C7.34315 3 6 4.34315 6 6V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V6C18 4.34315 16.6569 3 15 3H9ZM14.25 18C14.8023 18 15.25 18.4477 15.25 19C15.25 19.5523 14.8023 20 14.25 20H9.75C9.19772 20 8.75 19.5523 8.75 19C8.75 18.4477 9.19772 18 9.75 18H14.25Z"
        fill={color}
      />
    </svg>
  );
};

MobilePhoneBold24.category = 'Objects';

export default MobilePhoneBold24;
