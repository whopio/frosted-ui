import * as React from 'react';
import { IconProps } from './types';

export const Component1920 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 7.25L10 11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="14.5" r="1" fill={color} />
        <path
          d="M11.3997 2.56565L19.0617 16.0871C19.1851 16.3049 19.25 16.551 19.25 16.8013C19.25 17.6014 18.6014 18.25 17.8013 18.25H2.19867C1.39859 18.25 0.75 17.6014 0.75 16.8013C0.75 16.551 0.814871 16.3049 0.938289 16.0871L8.60031 2.56565C8.88595 2.06156 9.4206 1.75 10 1.75C10.5794 1.75 11.114 2.06155 11.3997 2.56565Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Component1920;