import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.75 1C27.3063 1 31 4.69365 31 9.25V22.75C31 27.3063 27.3063 31 22.75 31H9.25C4.69365 31 1 27.3063 1 22.75V9.25C1 4.69365 4.69365 1 9.25 1H22.75ZM21.9678 13.9971C20.8444 13.9972 19.767 14.444 18.9727 15.2383L5.71094 28.498C6.74001 29.133 7.95202 29.5 9.25 29.5H22.75C26.4779 29.5 29.5 26.4779 29.5 22.75V19.7744L24.9639 15.2383C24.1694 14.4439 23.0913 13.9971 21.9678 13.9971ZM11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7Z"
        fill={color}
      />
    </svg>
  );
};

PhotoFilled32.category = 'Interface General';

export default PhotoFilled32;
