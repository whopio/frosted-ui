import * as React from 'react';
import { IconProps } from './types';

export const TrashSolid16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.3795 13.6101L13 5.75H3L3.62053 13.6101C3.69363 14.5359 4.46627 15.25 5.39501 15.25H10.605C11.5337 15.25 12.3064 14.5359 12.3795 13.6101Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 3.75L5.37127 2.26493C5.59385 1.37459 6.39382.75 7.31155.75H8.68845C9.60618.75 10.4061 1.37459 10.6287 2.26493L11 3.75M1.75 3.75H14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default TrashSolid16;
