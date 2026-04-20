import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.2725 4.75C20.0248 4.75016 23.1084 7.60976 23.4648 11.2686L27.5977 8.09277C28.9878 7.02425 31 8.01519 31 9.76855V22.3145C30.9997 24.0441 29.0352 25.0412 27.6387 24.0205L23.4385 20.9502C22.9829 24.5035 19.9496 27.2498 16.2725 27.25H8.22754C4.23595 27.2498 1.00017 24.014 1 20.0225V11.9775C1.00017 7.98595 4.23595 4.75017 8.22754 4.75H16.2725Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnFilled32.category = 'Interface General';

export default WebcamOnFilled32;
