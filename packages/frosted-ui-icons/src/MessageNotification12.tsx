import * as React from 'react';
import { IconProps } from './types';

export const MessageNotification12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_526_241)">
          <mask
            id="a"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="12"
            height="12"
          >
            <path d="M12 0H0V12H12V0Z" fill={color} />
          </mask>
          <g mask="url(#a)">
            <path
              d="M9 0C8.1 0 7.3 0.4 6.8 1H2C0.9 1 0 1.9 0 3V8C0 9.1 0.9 10 2 10H3.2C3.3 10 3.3 10 3.4 10.1L5 11.8C5.1 11.9 5.3 12 5.5 12C5.7 12 5.9 11.9 6 11.8L7.6 10.1C7.7 10 7.7 10 7.8 10H9C10.1 10 11 9.1 11 8V5.2C11.6 4.7 12 3.9 12 3C12 1.3 10.7 0 9 0ZM7.6 2.5C7.8 1.9 8.4 1.5 9 1.5C9.8 1.5 10.5 2.2 10.5 3C10.5 3.7 10.1 4.2 9.5 4.4C9.3 4.5 9.2 4.5 9 4.5C8.2 4.5 7.5 3.8 7.5 3C7.5 2.8 7.5 2.7 7.6 2.5ZM9.5 8C9.5 8.3 9.3 8.5 9 8.5H7.8C7.3 8.5 6.9 8.7 6.5 9.1L5.5 10.2L4.5 9.1C4.1 8.7 3.7 8.5 3.2 8.5H2C1.7 8.5 1.5 8.3 1.5 8V3C1.5 2.7 1.7 2.5 2 2.5H6.1C6 2.7 6 2.8 6 3C6 4.7 7.3 6 9 6C9.2 6 9.3 6 9.5 5.9V8Z"
              fill={color}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_526_241">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MessageNotification12;
