import * as React from 'react';
import { IconProps } from './types';

export const Reply16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.27634 7.75165L6.94396 2.66531C7.15856 2.47271 7.49989 2.62503 7.49989 2.91339V5.66637C13.1666 5.66637 14.6666 7.83304 14.6666 13.4997C13.6666 11.4997 13.1666 10.333 7.49989 10.333V13.086C7.49989 13.3744 7.15856 13.5267 6.94396 13.3341L1.27634 8.24778C1.12875 8.11531 1.12875 7.88405 1.27634 7.75165Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply16;
