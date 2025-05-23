import * as React from 'react';
import { IconProps } from './types';

export const InfoCircle32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M18.25 24.2499V13.75H12.75M14.75 13.75V24.2499M12.75 24.2499H20.25M30.25 16C30.25 23.8701 23.8701 30.25 16 30.25C8.12994 30.25 1.75 23.8701 1.75 16C1.75 8.12994 8.12994 1.75 16 1.75C23.8701 1.75 30.25 8.12994 30.25 16ZM18.25 9.50403C18.25 10.4705 17.4665 11.254 16.5 11.254C15.5335 11.254 14.75 10.4705 14.75 9.50403C14.75 8.53753 15.5335 7.75403 16.5 7.75403C17.4665 7.75403 18.25 8.53753 18.25 9.50403Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoCircle32;
