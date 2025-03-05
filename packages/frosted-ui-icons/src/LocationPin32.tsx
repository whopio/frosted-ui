import * as React from 'react';
import { IconProps } from './types';

export const LocationPin32 = ({
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
        d="M26.75 13.5C26.75 21.4371 16 30.25 16 30.25C16 30.25 5.25 21.4371 5.25 13.5C5.25 7.56294 10.0629 2.75 16 2.75C21.9371 2.75 26.75 7.56294 26.75 13.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16"
        cy="13.5"
        r="4.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationPin32;
