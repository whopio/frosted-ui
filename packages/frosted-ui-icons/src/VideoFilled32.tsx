import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9.75167 4H5.75C3.12665 4 1 6.12665 1 8.75V11.5H2.25166L9.75167 4ZM4.37298 11.5H11.2517L18.7517 4H11.873L4.37298 11.5ZM31 11.5H22.1857L28.8871 4.79865C30.1611 5.65059 31 7.10232 31 8.75V11.5ZM26.25 4C26.6535 4 27.0453 4.05032 27.4194 4.14502L20.0644 11.5H13.373L20.873 4H26.25ZM31 13H1V23.25C1 25.8734 3.12665 28 5.75 28H26.25C28.8734 28 31 25.8734 31 23.25V13ZM12.65 24.1474V16.3568C12.65 15.973 13.0645 15.7323 13.3978 15.9225L20.2582 19.8372C20.5953 20.0295 20.5943 20.5159 20.2564 20.7068L13.3959 24.5827C13.0626 24.771 12.65 24.5302 12.65 24.1474Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default VideoFilled32;
