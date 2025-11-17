import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.8748 17.7085H8.12487C7.66462 17.7085 7.29153 17.3354 7.29153 16.8752V8.54183H4.45018C4.09376 8.54183 3.90187 8.12337 4.13445 7.85328L9.36842 1.77516C9.70083 1.38907 10.2988 1.38907 10.6313 1.77516L15.8652 7.85328C16.0978 8.12337 15.906 8.54183 15.5495 8.54183H12.7082V16.8752C12.7082 17.3354 12.3351 17.7085 11.8748 17.7085Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatUp20;
