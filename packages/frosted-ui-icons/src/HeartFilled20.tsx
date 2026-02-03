import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.625 2C17.5513 2 19.9998 4.27979 20 7.50684C20 11.0313 18.0014 13.7453 15.8965 15.627C13.7866 17.513 11.4765 18.6509 10.6299 19.0342C10.2256 19.2172 9.77439 19.2172 9.37012 19.0342C8.52352 18.6509 6.21337 17.513 4.10352 15.627C1.99862 13.7453 0 11.0313 0 7.50684C0.000225261 4.27979 2.44873 2 5.375 2C7.43089 2 8.77899 2.88552 9.60059 3.78613C9.75239 3.95256 9.88348 4.12087 10 4.28125C10.1165 4.12087 10.2476 3.95256 10.3994 3.78613C11.221 2.88552 12.5691 2 14.625 2Z"
        fill={color}
      />
    </svg>
  );
};

HeartFilled20.category = 'Interface General';

export default HeartFilled20;
