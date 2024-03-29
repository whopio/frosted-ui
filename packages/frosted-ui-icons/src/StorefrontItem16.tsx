import * as React from 'react';
import { IconProps } from './types';

export const StorefrontItem16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1122_75)">
          <path
            d="M15.25 5.5V3.25C15.25 2.14543 14.3546 1.25 13.25 1.25H2.75C1.64543 1.25 0.75 2.14543 0.75 3.25V10.75C0.75 11.8546 1.64543 12.75 2.75 12.75H4.75"
            stroke={color}
            strokeOpacity=".875"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.0269 6.81067C11.0896 6.77104 11.1623 6.75 11.2365 6.75C11.3107 6.75 11.3833 6.77104 11.446 6.81067L13.8697 8.3427L11.2351 9.76859L8.60191 8.34352L11.0269 6.81067ZM7.97296 9.70872V12.132C7.97296 12.211 8.01344 12.2845 8.08021 12.3267L10.4828 13.8454V11.067L7.97296 9.70872ZM11.9828 13.85L14.3927 12.3267C14.4595 12.2845 14.5 12.211 14.5 12.132V9.70719L11.9828 11.0695V13.85ZM11.2365 5.25C10.8786 5.25 10.528 5.35151 10.2255 5.54274L7.27875 7.40535C6.7771 7.72244 6.47296 8.27449 6.47296 8.86795V12.132C6.47296 12.7255 6.7771 13.2776 7.27875 13.5946L10.2255 15.4573C10.528 15.6485 10.8786 15.75 11.2365 15.75C11.5944 15.75 11.9449 15.6485 12.2475 15.4573L15.1942 13.5946C15.6958 13.2776 16 12.7255 16 12.132V8.86795C16 8.27449 15.6958 7.72244 15.1942 7.40535L12.2475 5.54274C11.9449 5.35151 11.5944 5.25 11.2365 5.25Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
            fillOpacity=".875"
          />
          <circle cx="3.25" cy="3.75" r=".75" fill={color} fillOpacity=".875" />
          <circle cx="5.75" cy="3.75" r=".75" fill={color} fillOpacity=".875" />
          <circle cx="8.25" cy="3.75" r=".75" fill={color} fillOpacity=".875" />
        </g>
        <defs>
          <clipPath id="clip0_1122_75">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default StorefrontItem16;
