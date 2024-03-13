import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlus24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_285_66)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M21.1875 13.5573C21.1875 8.74909 21.1875 8.67511 21.1875 5.87715C21.1875 4.2203 19.8444 2.875 18.1875 2.875H5.875C4.21815 2.875 2.875 4.21815 2.875 5.875V18.1875C2.875 19.8444 4.21808 21.1875 5.87493 21.1875C8.44786 21.1875 11.1326 21.1875 13.5573 21.1875"
            strokeLinejoin="round"
          />
          <path d="M7 8H17M7 16H12M7 12H17M20.25 23.25V20.25M20.25 17.25V20.25M20.25 20.25H17.25M20.25 20.25H23.25" />
        </g>
        <defs>
          <clipPath id="clip0_285_66">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DocumentPlus24;
