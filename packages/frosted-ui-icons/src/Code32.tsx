import * as React from 'react';
import { IconProps } from './types';

export const Code32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 27L19 5M24.3333 10.3333L27.9465 14.1724C28.9129 15.1992 28.9129 16.8008 27.9465 17.8276L24.3333 21.6667M7.66667 21.6667L4.05347 17.8276C3.08707 16.8008 3.08707 15.1992 4.05347 14.1724L7.66667 10.3333"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code32;
