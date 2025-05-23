import * as React from 'react';
import { IconProps } from './types';

export const Flag24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.75 15.0833V4.39913C4.75 4.01863 4.96569 3.67153 5.31888 3.52999C6.07782 3.22586 7.48952 2.75 8.89286 2.75C10.9553 2.75 13.0447 4.80556 15.1071 4.80556C16.0515 4.80556 16.9997 4.59005 17.7502 4.3564C18.458 4.13604 19.25 4.64588 19.25 5.38717V14.462C19.25 14.8425 19.0343 15.1896 18.6811 15.3311C17.9222 15.6353 16.5105 16.1111 15.1071 16.1111C13.0447 16.1111 10.9553 14.0556 8.89286 14.0556C6.83045 14.0556 4.75 15.0833 4.75 15.0833ZM4.75 15.0833V21.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Flag24;
