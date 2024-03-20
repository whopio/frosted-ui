import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M6.22324 1.21531L3.43354 4.00501H6.09555L9.10056 1H6.36393C6.33347 1.07845 6.28657 1.15198 6.22324 1.21531ZM4.67078 1L1.66577 4.00501H0.28125C0.180087 4.00501 0.0845372 4.02904 0 4.07171V2.9C0 1.85066 0.850659 1 1.9 1H4.67078ZM7.86332 4.00501H12V2.9C12 2.07961 11.48 1.38065 10.7517 1.11471C10.7426 1.12507 10.7331 1.13519 10.7233 1.14507L7.86332 4.00501ZM0.28125 5.25501H12V9.1C12 10.1493 11.1493 11 10.1 11H1.9C0.850659 11 0 10.1493 0 9.1V5.1883C0.0845372 5.23097 0.180087 5.25501 0.28125 5.25501ZM4.63907 6.5944V9.71065C4.63907 9.86378 4.80412 9.9601 4.93745 9.88478L7.68162 8.33441C7.81678 8.25805 7.81719 8.06351 7.68236 7.98657L4.93819 6.42069C4.80486 6.34461 4.63907 6.44089 4.63907 6.5944Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default VideoFilled12;
