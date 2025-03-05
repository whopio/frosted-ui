import * as React from 'react';
import { IconProps } from './types';

export const LocationPin12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="6" cy="5" r="2" fill={color} />
      <path
        d="M10.25 5C10.25 8.34721 6 11.25 6 11.25C6 11.25 1.75 8.34721 1.75 5C1.75 2.65279 3.65279 0.75 6 0.75C8.34721 0.75 10.25 2.65279 10.25 5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationPin12;
