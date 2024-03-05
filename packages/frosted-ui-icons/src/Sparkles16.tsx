import * as React from 'react';
import { IconProps } from './types';

export const Sparkles16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 11C5 9.57392 3.42608 8 2 8 3.42608 8 5 6.42608 5 5 5 6.42608 6.57392 8 8 8 6.57392 8 5 9.57392 5 11zM10.5 6C10.5 5.28696 9.71304 4.5 9 4.5 9.71304 4.5 10.5 3.71304 10.5 3 10.5 3.71304 11.287 4.5 12 4.5 11.287 4.5 10.5 5.28696 10.5 6zM10.5 13C10.5 12.287 9.71304 11.5 9 11.5 9.71304 11.5 10.5 10.713 10.5 10 10.5 10.713 11.287 11.5 12 11.5 11.287 11.5 10.5 12.287 10.5 13z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sparkles16;
