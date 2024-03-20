import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_882_378)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="7.25" />
          <path d="M4.75 4.75H9.625C10.5225 4.75 11.25 5.47754 11.25 6.375V6.375C11.25 7.27246 10.5225 8 9.625 8H5.75M6.75 3.5L6.75 4.75M5.74988 4.75L5.74988 8M9.75 3.5L9.75 4.75M4.75 11.25H9.625C10.5225 11.25 11.25 10.5225 11.25 9.625V9.625C11.25 8.72754 10.5225 8 9.625 8H5.75M6.75 12.5L6.75 11.25M5.74988 11.25L5.74988 8M9.75 12.5L9.75 11.25" />
        </g>
        <defs>
          <clipPath id="clip0_882_378">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Bitcoin16;
