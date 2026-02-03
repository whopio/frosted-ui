import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_6096_16)">
        <path
          d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM16.291 8.87012C16.5662 8.14465 15.8553 7.43381 15.1299 7.70898L10.5918 9.43066C10.0566 9.63365 9.63365 10.0566 9.43066 10.5918L7.70898 15.1299C7.43381 15.8553 8.14465 16.5662 8.87012 16.291L13.4082 14.5693C13.9434 14.3663 14.3663 13.9434 14.5693 13.4082L16.291 8.87012Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_6096_16">
          <path fill={color} d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CompassFilled24;
