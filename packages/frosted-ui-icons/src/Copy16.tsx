import * as React from 'react';
import { IconProps } from './types';

export const Copy16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_14_1669)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.75 8.84V2.16C6.75 1.38128 7.38128 0.75 8.16 0.75H13.84C14.6187 0.75 15.25 1.38128 15.25 2.16V8.84C15.25 9.61872 14.6187 10.25 13.84 10.25H8.16C7.38128 10.25 6.75 9.61872 6.75 8.84Z" />
          <path d="M4.25 5.75H2.16C1.38128 5.75 0.75 6.38128 0.75 7.16V13.84C0.75 14.6187 1.38128 15.25 2.16 15.25H7.84C8.61872 15.25 9.25 14.6187 9.25 13.84V12.75" />
        </g>
        <defs>
          <clipPath id="clip0_14_1669">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Copy16;
