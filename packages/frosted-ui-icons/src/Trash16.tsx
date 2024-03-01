import * as React from 'react';
import { IconProps } from './types';

export const Trash16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.75L3.64147 13.5858C3.70252 14.5219 4.4796 15.25 5.41769 15.25H10.5823C11.5204 15.25 12.2975 14.522 12.3585 13.5858L13 3.75M5 3.75L5.37127 2.26493C5.59385 1.37459 6.39382.75 7.31155.75H8.68845C9.60618.75 10.4061 1.37459 10.6287 2.26493L11 3.75M1.75 3.75H14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Trash16;