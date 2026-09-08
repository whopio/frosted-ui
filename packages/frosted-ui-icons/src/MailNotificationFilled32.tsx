import * as React from 'react';
import { IconProps } from './types';

export const MailNotificationFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MailNotificationFilled32"
      {...props}
    >
      <path
        d="M31 20.75c0 4.004-3.246 7.25-7.25 7.25H8.25C4.246 28 1 24.754 1 20.75v-9.21l13.577 5.563c.911.373 1.933.373 2.844 0L31 11.537v9.212zm-9.25-16.5c0 3.314 2.686 6 6 6 .596 0 1.172-.088 1.716-.25h1.329l-13.943 5.715c-.547.224-1.16.224-1.707 0l-14.03-5.75C1.722 6.574 4.685 4 8.25 4h13.506c-.003.083-.006.166-.006.25zm6-4.25C30.097 0 32 1.903 32 4.25S30.097 8.5 27.75 8.5 23.5 6.597 23.5 4.25 25.403 0 27.75 0z"
        fill={color}
      />
    </svg>
  );
};

MailNotificationFilled32.category = 'Communication';

export default MailNotificationFilled32;
