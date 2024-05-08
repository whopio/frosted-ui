import * as React from 'react';
import { IconProps } from './types';

export const Reply32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.55275 15.5034L13.888 5.33069C14.3172 4.94549 14.9998 5.25011 14.9998 5.82685V11.3328C26.3332 11.3328 29.3332 15.6661 29.3332 26.9995C27.3332 22.9995 26.3332 20.6662 14.9998 20.6662V26.172C14.9998 26.7488 14.3172 27.0535 13.888 26.6683L2.55275 16.4956C2.25756 16.2307 2.25756 15.7682 2.55275 15.5034Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply32;
