import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlusK = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_570_1087)">
          <g
            stroke={color}
            clipPath="url(#clip1_570_1087)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path
              d="M10.3125 5.40386C10.3125 4.26621 10.3125 3.8985 10.3125 3.68694C10.3125 2.58237 9.41707 1.6875 8.3125 1.6875H3.71875C2.61418 1.6875 1.71875 2.58293 1.71875 3.6875V8.25C1.71875 9.35457 2.61414 10.25 3.71871 10.25C4.55873 10.25 5.49989 10.25 6.19463 10.25"
              strokeLinejoin="round"
            />
            <path d="M4.09375 4.625H8.15625M4.09375 6.96887H7.26937M9.65625 10.5V9M9.65625 7.5V9M9.65625 9H8.15625M9.65625 9H11.1562" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_570_1087">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
          <clipPath id="clip1_570_1087">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DocumentPlusK;
