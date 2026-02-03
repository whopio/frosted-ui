import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.75 17.2389V2.80479C3.75 1.15698 5.59563 0.182576 6.9563 1.11202L17.5218 8.32908C18.7134 9.14304 18.7134 10.9007 17.5218 11.7146L6.95629 18.9317C5.59562 19.8611 3.75 18.8867 3.75 17.2389Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlayFilled20;
