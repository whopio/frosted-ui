import * as React from 'react';
import { IconProps } from './types';

export const Photos20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.25 3C1.66421 3 2 3.33579 2 3.75V16.25C2 17.2165 2.7835 18 3.75 18H16.25C16.6642 18 17 18.3358 17 18.75C17 19.1642 16.6642 19.5 16.25 19.5H3.75C1.95507 19.5 0.5 18.0449 0.5 16.25V3.75C0.5 3.33579 0.835786 3 1.25 3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.75 2C5.7835 2 5 2.7835 5 3.75V13.25C5 14.2165 5.7835 15 6.75 15H16.25C17.2165 15 18 14.2165 18 13.25V3.75C18 2.7835 17.2165 2 16.25 2H6.75ZM3.5 3.75C3.5 1.95507 4.95507 0.5 6.75 0.5H16.25C18.0449 0.5 19.5 1.95507 19.5 3.75V13.25C19.5 15.0449 18.0449 16.5 16.25 16.5H6.75C4.95507 16.5 3.5 15.0449 3.5 13.25V3.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.34067 6.5C8.12759 6.5 7.92522 6.59343 7.78702 6.75561L4.82085 10.2364C4.55219 10.5517 4.07883 10.5895 3.76355 10.3209 3.44828 10.0522 3.41049 9.57883 3.67915 9.26355L6.64532 5.78272C7.06852 5.28609 7.68819 5 8.34067 5 8.96263 5 9.55626 5.26005 9.97795 5.71722L18.1434 14.57C18.4243 14.8744 18.4051 15.3489 18.1007 15.6298 17.7962 15.9106 17.3217 15.8914 17.0409 15.587L8.87535 6.73422C8.73764 6.58492 8.54378 6.5 8.34067 6.5zM14.5 4.5C13.9477 4.5 13.5 4.94772 13.5 5.5 13.5 6.05228 13.9477 6.5 14.5 6.5 15.0523 6.5 15.5 6.05228 15.5 5.5 15.5 4.94772 15.0523 4.5 14.5 4.5zM12 5.5C12 4.11929 13.1193 3 14.5 3 15.8807 3 17 4.11929 17 5.5 17 6.88071 15.8807 8 14.5 8 13.1193 8 12 6.88071 12 5.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Photos20;
