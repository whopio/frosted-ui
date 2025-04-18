import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M11.875 17.7085H8.12499C7.66475 17.7085 7.29166 17.3354 7.29166 16.8752V8.54183H4.45031C4.09388 8.54183 3.902 8.12337 4.13457 7.85328L9.36854 1.77516C9.70096 1.38907 10.299 1.38907 10.6315 1.77516L15.8654 7.85328C16.098 8.12337 15.9061 8.54183 15.5496 8.54183H12.7083V16.8752C12.7083 17.3354 12.3352 17.7085 11.875 17.7085Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatUp20;
