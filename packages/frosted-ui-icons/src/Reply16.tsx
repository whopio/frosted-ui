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
          d="M1.27637 7.75171L6.94399 2.66537C7.15859 2.47277 7.49992 2.62509 7.49992 2.91345V5.66643C13.1666 5.66643 14.6666 7.83311 14.6666 13.4998C13.6666 11.4998 13.1666 10.3331 7.49992 10.3331V13.086C7.49992 13.3744 7.15859 13.5268 6.94399 13.3342L1.27637 8.24784C1.12878 8.11537 1.12878 7.88411 1.27637 7.75171Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply16;
