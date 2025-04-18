import * as React from 'react';
import { IconProps } from './types';

export const MailOut24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.75 10.5V7.04C20.75 5.49913 19.5009 4.25 17.96 4.25H3.54C1.99913 4.25 0.75 5.49913 0.75 7.04V16.96C0.75 18.5009 1.99913 19.75 3.54 19.75H16.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M.75 7.75L8.56324 13.0756C9.20786 13.515 9.96988 13.75 10.75 13.75V13.75C11.5301 13.75 12.2921 13.515 12.9368 13.0756L20.75 7.75M19.875 13.0625L23.25 16.25 19.875 19.4375M14.625 16.25H23.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailOut24;
