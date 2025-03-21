import * as React from 'react';
import { IconProps } from './types';

export const Messages24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.2498 14.25H19.252C20.3565 14.25 21.252 13.3546 21.252 12.25V5.75C21.252 4.64543 20.3565 3.75 19.252 3.75H9.00195C7.89738 3.75 7.00195 4.64543 7.00195 5.75V7.75M15.252 7.75H4.75195C3.64738 7.75 2.75195 8.64543 2.75195 9.75V16.25C2.75195 17.3546 3.64738 18.25 4.75195 18.25H6.00195V20.75L10.502 18.25H15.252C16.3565 18.25 17.252 17.3546 17.252 16.25V9.75C17.252 8.64543 16.3565 7.75 15.252 7.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Messages24;
