import * as React from 'react';
import { IconProps } from './types';

export const Star16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_16_264)">
          <path
            d="M7.52445 1.96353C7.67413 1.50287 8.32583 1.50287 8.47551 1.96353L9.74935 5.884C9.81629 6.09001 10.0083 6.22949 10.2249 6.22949H14.3471C14.8315 6.22949 15.0329 6.8493 14.641 7.134L11.306 9.55698C11.1308 9.68431 11.0575 9.90999 11.1244 10.116L12.3983 14.0365C12.5479 14.4971 12.0207 14.8802 11.6288 14.5955L8.29388 12.1725C8.11863 12.0452 7.88133 12.0452 7.70609 12.1725L4.37114 14.5955C3.97928 14.8802 3.45204 14.4971 3.60171 14.0365L4.87555 10.116C4.94249 9.90999 4.86916 9.68431 4.69392 9.55698L1.35896 7.134C0.967107 6.8493 1.16849 6.22949 1.65286 6.22949H5.77509C5.9917 6.22949 6.18368 6.09001 6.25061 5.884L7.52445 1.96353Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_264">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Star16;
