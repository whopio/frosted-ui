import * as React from 'react';
import { IconProps } from './types';

export const HourGlass12 = ({
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
      <path
        d="M4.66667 6C4.66667 4.6944 2.43934 5.17862 2.05588 2.00017C1.98973 1.45186 2.44772 1 3 1H9C9.55228 1 10.0103 1.45186 9.94412 2.00017C9.56066 5.17862 7.33333 4.6944 7.33333 6C7.33333 7.3056 9.56066 6.82138 9.94412 9.99983C10.0103 10.5481 9.55228 11 9 11H3C2.44772 11 1.98973 10.5481 2.05588 9.99983C2.43934 6.82138 4.66667 7.3056 4.66667 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.45087 4.19652C4.7979 3.83609 4.21975 3.33216 3.98893 2.79532C3.87986 2.54164 4.10628 2.3103 4.38242 2.3103H7.61733C7.89348 2.3103 8.1199 2.54164 8.01082 2.79532C7.78 3.33216 7.20185 3.83609 6.54889 4.19652C6.20714 4.38516 5.79261 4.38516 5.45087 4.19652Z"
        fill={color}
      />
    </svg>
  );
};

export default HourGlass12;
