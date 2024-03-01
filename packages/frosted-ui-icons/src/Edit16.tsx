import * as React from 'react';
import { IconProps } from './types';

export const Edit16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          clipPath="url(#clip0_1_6706)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M15.25 10.75V12.75C15.25 14.1307 14.1307 15.25 12.75 15.25H3.25C1.86929 15.25 0.75 14.1307 0.75 12.75V3.25C0.75 1.86929 1.86929 0.75 3.25 0.75H5.25"
            strokeLinejoin="round"
          />
          <path d="M13.07 5.92993L14.6558 4.34415C15.4368 3.5631 15.4368 2.29677 14.6558 1.51572L14.4842 1.34415C13.7032 0.563096 12.4368 0.563097 11.6558 1.34415L10.07 2.92993M13.07 5.92993L9.33579 9.66415C8.96071 10.0392 8.45201 10.2499 7.92157 10.2499H6.25C5.97386 10.2499 5.75 10.0261 5.75 9.74994V8.07837C5.75 7.54793 5.96071 7.03923 6.33579 6.66415L10.07 2.92993M13.07 5.92993L10.07 2.92993" />
        </g>
        <defs>
          <clipPath id="clip0_1_6706">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Edit16;