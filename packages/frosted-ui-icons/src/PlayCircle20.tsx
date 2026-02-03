import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 8.05322e-08 15.5228 0 10C0 4.47715 4.47715 6.44258e-08 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM7.25 7.40137C7.25002 6.20334 8.58521 5.48878 9.58203 6.15332L13.4795 8.75195C14.3701 9.34569 14.3701 10.6543 13.4795 11.248L9.58203 13.8467C8.58521 14.5112 7.25002 13.7967 7.25 12.5986V7.40137ZM8.75 12.5986L12.6475 10L8.75 7.40137V12.5986Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayCircle20;
