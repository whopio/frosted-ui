import * as React from 'react';
import { IconProps } from './types';

export const Stats32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 4.75V23.75C2.75 25.683 4.317 27.25 6.25 27.25H29.25M6.75 20.25L13.25 13.75L17.75 18.25L26.25 9.75M26.25 9.75H21.75M26.25 9.75V14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Stats32;
