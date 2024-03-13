import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g fill={color} clipPath="url(#clip0_526_292)">
          <path
            d="M6 3C6.41421 3 6.75 3.33579 6.75 3.75V5.75C6.75 6.16421 6.41421 6.5 6 6.5C5.58579 6.5 5.25 6.16421 5.25 5.75V3.75C5.25 3.33579 5.58579 3 6 3Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path d="M6.75 8C6.75 8.41421 6.41421 8.75 6 8.75C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25C6.41421 7.25 6.75 7.58579 6.75 8Z" />
          <path
            d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_526_292">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ExclamationCircle12;
