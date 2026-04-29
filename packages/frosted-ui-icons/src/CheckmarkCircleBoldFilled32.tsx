import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.6342 0.5 31.5 7.36576 31.5 16C31.5 24.6342 24.6342 31.5 16 31.5C7.3658 31.5 0.500004 24.6342 0.5 16C0.5 7.36576 7.3658 0.500016 16 0.5ZM23.3105 10.9395C22.7248 10.3537 21.7752 10.3537 21.1895 10.9395L13.6201 18.5088L10.8105 15.6992C10.2248 15.1135 9.27523 15.1135 8.68945 15.6992C8.10367 16.285 8.10372 17.2345 8.68945 17.8203L12.5596 21.6904C12.8409 21.9717 13.2223 22.1299 13.6201 22.1299C14.0179 22.1299 14.3994 21.9717 14.6807 21.6904L23.3105 13.0605C23.8963 12.4748 23.8963 11.5252 23.3105 10.9395Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleBoldFilled32.category = 'Checkmarks';

export default CheckmarkCircleBoldFilled32;
