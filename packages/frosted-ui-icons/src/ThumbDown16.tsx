import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.49998 8.83335H2.49998C2.13179 8.83335 1.83331 8.53489 1.83331 8.16669V3.16669C1.83331 2.79849 2.13179 2.50002 2.49998 2.50002H4.49998M4.49998 2.50002V8.66669L7.14718 13.8053C7.26145 14.0272 7.49098 14.1667 7.74065 14.1667C8.55891 14.1667 9.18718 13.4365 9.06111 12.628L8.67738 10.1667H12.1726C13.397 10.1667 14.334 9.07629 14.1498 7.86582L13.5918 4.19915C13.4432 3.22202 12.603 2.50002 11.6146 2.50002H4.49998Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbDown16;
