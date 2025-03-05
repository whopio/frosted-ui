import * as React from 'react';
import { IconProps } from './types';

export const Message24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 5.75C2.75 4.64543 3.64543 3.75 4.75 3.75H19.25C20.3546 3.75 21.25 4.64543 21.25 5.75V16.25C21.25 17.3546 20.3546 18.25 19.25 18.25H15.3759C15.143 18.25 14.9173 18.3313 14.738 18.4799L12.6397 20.2183C12.2679 20.5263 11.7292 20.5248 11.3593 20.2147L9.29422 18.4836C9.11418 18.3327 8.88675 18.25 8.65182 18.25H4.75C3.64543 18.25 2.75 17.3546 2.75 16.25V5.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.75C6.80963 9.75 6.25 10.3097 6.25 11 6.25 11.6903 6.80963 12.25 7.5 12.25 8.19037 12.25 8.75 11.6903 8.75 11 8.75 10.3097 8.19037 9.75 7.5 9.75zM12 9.75C11.3097 9.75 10.75 10.3097 10.75 11 10.75 11.6903 11.3097 12.25 12 12.25 12.6903 12.25 13.25 11.6903 13.25 11 13.25 10.3097 12.6903 9.75 12 9.75zM16.5 9.75C15.8097 9.75 15.25 10.3097 15.25 11 15.25 11.6903 15.8097 12.25 16.5 12.25 17.1903 12.25 17.75 11.6903 17.75 11 17.75 10.3097 17.1903 9.75 16.5 9.75z"
        fill={color}
      />
    </svg>
  );
};

export default Message24;
