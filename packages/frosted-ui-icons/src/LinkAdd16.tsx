import * as React from 'react';
import { IconProps } from './types';

export const LinkAdd16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.38236 1.30698C9.2192 0.470135 10.3542 0 11.5377 0C14.0022 0 16 1.99784 16 4.46231C16 5.64579 15.5299 6.7808 14.693 7.61764L12.3116 9.99908C12.0187 10.292 11.5438 10.292 11.2509 9.99908C10.958 9.70619 10.958 9.23131 11.2509 8.93842L13.6324 6.55698C14.1879 6.00144 14.5 5.24796 14.5 4.46231C14.5 2.82627 13.1737 1.5 11.5377 1.5C10.752 1.5 9.99856 1.8121 9.44302 2.36764L7.06158 4.74908C6.76869 5.04197 6.29381 5.04197 6.00092 4.74908C5.70803 4.45619 5.70803 3.98131 6.00092 3.68842L8.38236 1.30698ZM4.74908 6.00092C5.04197 6.29381 5.04197 6.76869 4.74908 7.06158L2.36764 9.44302C1.8121 9.99856 1.5 10.752 1.5 11.5377C1.5 13.1737 2.82627 14.5 4.46231 14.5C5.24796 14.5 6.00144 14.1879 6.55698 13.6324L8.93842 11.2509C9.23131 10.958 9.70619 10.958 9.99908 11.2509C10.292 11.5438 10.292 12.0187 9.99908 12.3116L7.61764 14.693C6.7808 15.5299 5.64579 16 4.46231 16C1.99784 16 0 14.0022 0 11.5377C0 10.3542 0.470135 9.2192 1.30698 8.38236L3.68842 6.00092C3.98131 5.70803 4.45619 5.70803 4.74908 6.00092Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M10.7803 5.21967C11.0732 5.51256 11.0732 5.98744 10.7803 6.28033L6.28033 10.7803C5.98744 11.0732 5.51256 11.0732 5.21967 10.7803 4.92678 10.4874 4.92678 10.0126 5.21967 9.71967L9.71967 5.21967C10.0126 4.92678 10.4874 4.92678 10.7803 5.21967zM13.5 16C13.0858 16 12.75 15.6642 12.75 15.25L12.75 11.75C12.75 11.3358 13.0858 11 13.5 11 13.9142 11 14.25 11.3358 14.25 11.75L14.25 15.25C14.25 15.6642 13.9142 16 13.5 16z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.75 12.75L15.25 12.75C15.6642 12.75 16 13.0858 16 13.5C16 13.9142 15.6642 14.25 15.25 14.25L11.75 14.25C11.3358 14.25 11 13.9142 11 13.5C11 13.0858 11.3358 12.75 11.75 12.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default LinkAdd16;
