import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="14.5" cy="6.219" r="2.5" fill={color} />
        <path
          d="M16 28.2812V12.7969H11M16 28.2812H11M16 28.2812H21"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default InfoFilled32;
