import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M4.1286 9.58329H2.50004C1.71765 9.58329 1.08337 8.94905 1.08337 8.16663V3.16663C1.08337 2.3842 1.71765 1.74996 2.50004 1.74996H11.6147C12.9738 1.74996 14.1289 2.74271 14.3334 4.08626L14.8914 7.75293C15.1447 9.41734 13.8563 10.9166 12.1726 10.9166H9.55343L9.80222 12.5123C9.99956 13.778 9.01685 14.9166 7.74071 14.9166C7.21135 14.9166 6.72391 14.6213 6.48051 14.1487L4.1286 9.58329ZM3.75004 3.24996V8.08329H2.58337V3.24996H3.75004Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbDownFilled16;
