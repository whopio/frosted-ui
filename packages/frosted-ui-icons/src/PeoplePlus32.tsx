import * as React from 'react';
import { IconProps } from './types';

export const PeoplePlus32 = ({
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
        d="M21 18.7266C18.9877 15.7791 15.4417 13.8569 11.4294 14.0083C5.53988 14.2297 1 19.0877 1 24.6914C1 26.5204 2.55828 28 4.48466 28H18.1227M18 15.2784C19.0257 12.7644 21.434 11 24.2324 11C27.2093 11 29.7401 12.9835 30.6432 15.7512C30.8774 16.4547 31 17.2158 31 18M25 19V29M20 24H30M16 6.5C16 8.98528 13.9853 11 11.5 11C9.01472 11 7 8.98528 7 6.5C7 4.01472 9.01472 2 11.5 2C13.9853 2 16 4.01472 16 6.5ZM27 6C27 7.65685 25.6569 9 24 9C22.3431 9 21 7.65685 21 6C21 4.34315 22.3431 3 24 3C25.6569 3 27 4.34315 27 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PeoplePlus32;
