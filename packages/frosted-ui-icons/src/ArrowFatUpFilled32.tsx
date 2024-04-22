import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.7334 28H12.2667C11.9722 28 11.7334 27.7612 11.7334 27.4667V17.3333C11.7334 17.0388 11.4946 16.8 11.2 16.8H6.47206C6.01988 16.8 5.77287 16.2726 6.06234 15.9252L15.5903 4.49166C15.8035 4.23579 16.1965 4.23579 16.4098 4.49166L25.9377 15.9252C26.2272 16.2726 25.9802 16.8 25.528 16.8H20.8C20.5055 16.8 20.2667 17.0388 20.2667 17.3333V27.4667C20.2667 27.7612 20.0279 28 19.7334 28Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M15.0142 4.01152L15.0142 4.01152L5.48618 15.4451C4.78962 16.281 5.38401 17.55 6.47206 17.55H10.9834V27.4667C10.9834 28.1754 11.5579 28.75 12.2667 28.75H19.7334C20.4421 28.75 21.0167 28.1754 21.0167 27.4667V17.55H25.528C26.6161 17.55 27.2105 16.281 26.5139 15.4451L16.9859 4.01152L16.9859 4.01152C16.4729 3.39584 15.5272 3.39584 15.0142 4.01152Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled32;
