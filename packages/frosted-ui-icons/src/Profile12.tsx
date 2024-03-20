import * as React from 'react';
import { IconProps } from './types';

export const Profile12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_882_810)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 9.87798C1 9.55323 1.11543 9.23798 1.37332 9.04059C1.99475 8.56494 3.43391 7.75 6 7.75C8.56609 7.75 10.0052 8.56494 10.6267 9.04059C10.8846 9.23798 11 9.55323 11 9.87798V9.87798C11 10.6357 10.3857 11.25 9.62798 11.25H2.37202C1.61427 11.25 1 10.6357 1 9.87798V9.87798Z" />
          <circle cx="6" cy="3.25" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_882_810">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Profile12;
