import * as React from 'react';
import { IconProps } from './types';

export const LightsOff32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.8 31.25H19.2M7.5 16C7.5 19.1202 9.51176 21.1974 10.8451 22.2313C11.5202 22.7549 12 23.5363 12 24.3906C12 25.9698 13.2802 27.25 14.8594 27.25H17.1406C18.7198 27.25 20 25.9698 20 24.3906C20 23.5363 20.4798 22.7549 21.1549 22.2313C22.4882 21.1974 24.5 19.1202 24.5 16C24.5 11.3333 21.4999 7.5 15.9999 7.5C10.5 7.5 7.5 11.3333 7.5 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LightsOff32;
