import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M27.2928 8.04256C27.6833 7.65241 28.3164 7.65231 28.7069 8.04256C29.0973 8.43298 29.0971 9.06607 28.7069 9.45662L12.2069 25.9566C12.0194 26.1441 11.765 26.2495 11.4998 26.2496C11.2347 26.2496 10.9803 26.1441 10.7928 25.9566L3.29281 18.4566C2.90245 18.0661 2.90234 17.433 3.29281 17.0426C3.6833 16.6523 4.31642 16.6523 4.70687 17.0426L11.4998 23.8355L27.2928 8.04256Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBold32.category = 'Checkmarks';

export default CheckmarkBold32;
