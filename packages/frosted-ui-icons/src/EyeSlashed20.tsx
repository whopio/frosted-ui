import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashed20 = ({
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
        d="M2.75 17.25L17.25 2.75M6.99553 16.54C7.91834 16.9783 8.92425 17.25 9.99998 17.25C15.1539 17.25 18.7051 11.0122 19.1925 10.1086C19.2305 10.0382 19.2305 9.96182 19.1925 9.8914C18.9795 9.49645 18.1812 8.08256 16.9196 6.61586M3.08031 13.3841C1.81875 11.9174 1.02045 10.5036 0.807421 10.1086C0.769434 10.0382 0.769434 9.96182 0.807421 9.8914C1.29484 8.98775 4.8461 2.75 9.99998 2.75C11.0757 2.75 12.0816 3.02175 13.0044 3.46002M13.25 10C13.25 11.7949 11.7949 13.25 10 13.25C8.20507 13.25 6.75 11.7949 6.75 10C6.75 8.20507 8.20507 6.75 10 6.75C11.7949 6.75 13.25 8.20507 13.25 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default EyeSlashed20;
