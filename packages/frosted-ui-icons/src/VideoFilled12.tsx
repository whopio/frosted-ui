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
          d="M6.22324 1.21528L3.43354 4.00498H6.09555L9.10056 0.999969H6.36393C6.33347 1.07842 6.28657 1.15195 6.22324 1.21528ZM4.67078 0.999969L1.66577 4.00498H0.28125C0.180087 4.00498 0.0845372 4.02901 0 4.07168V2.89997C0 1.85063 0.850659 0.999969 1.9 0.999969H4.67078ZM7.86332 4.00498H12V2.89997C12 2.07957 11.48 1.38062 10.7517 1.11468C10.7426 1.12504 10.7331 1.13516 10.7233 1.14504L7.86332 4.00498ZM0.28125 5.25498H12V9.09997C12 10.1493 11.1493 11 10.1 11H1.9C0.850659 11 0 10.1493 0 9.09997V5.18827C0.0845372 5.23094 0.180087 5.25498 0.28125 5.25498ZM4.63907 6.59437V9.71062C4.63907 9.86375 4.80412 9.96007 4.93745 9.88475L7.68162 8.33438C7.81678 8.25802 7.81719 8.06348 7.68236 7.98654L4.93819 6.42066C4.80486 6.34458 4.63907 6.44086 4.63907 6.59437Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default VideoFilled12;
