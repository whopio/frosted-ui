import * as React from 'react';
import { IconProps } from './types';

export const Cube32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.0003 16V27.3333M16.0003 16L6 10.375M16.0003 16L25.6836 10.5529M27 11.372V20.6278C27 21.5913 26.4804 22.4797 25.6407 22.9521L17.3073 27.6396C16.4956 28.0962 15.5044 28.0962 14.6927 27.6396L6.35931 22.9521C5.51963 22.4797 5 21.5913 5 20.6278V11.372C5 10.4087 5.51963 9.52017 6.35931 9.04785L14.6927 4.36035C15.5044 3.90373 16.4956 3.90373 17.3073 4.36035L25.6407 9.04785C26.4804 9.52017 27 10.4087 27 11.372Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cube32;
