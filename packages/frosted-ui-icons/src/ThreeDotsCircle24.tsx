import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M8 12V11.99M8.25 12C8.25 12.1381 8.13807 12.25 8 12.25 7.86193 12.25 7.75 12.1381 7.75 12 7.75 11.8619 7.86193 11.75 8 11.75 8.13807 11.75 8.25 11.8619 8.25 12zM12 12V11.99M12.25 12C12.25 12.1381 12.1381 12.25 12 12.25 11.8619 12.25 11.75 12.1381 11.75 12 11.75 11.8619 11.8619 11.75 12 11.75 12.1381 11.75 12.25 11.8619 12.25 12zM16 12V11.99M16.25 12C16.25 12.1381 16.1381 12.25 16 12.25 15.8619 12.25 15.75 12.1381 15.75 12 15.75 11.8619 15.8619 11.75 16 11.75 16.1381 11.75 16.25 11.8619 16.25 12z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ThreeDotsCircle24;
