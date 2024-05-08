import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 7.16671H2.5C2.13181 7.16671 1.83333 7.46517 1.83333 7.83337V12.8334C1.83333 13.2016 2.13181 13.5 2.5 13.5H4.5M4.5 13.5V7.33337L7.1472 2.19473C7.26147 1.97283 7.491 1.83337 7.74067 1.83337C8.55893 1.83337 9.1872 2.56361 9.06113 3.37211L8.6774 5.83337H12.1726C13.3971 5.83337 14.3341 6.92377 14.1499 8.13424L13.5919 11.8009C13.4432 12.778 12.6031 13.5 11.6147 13.5H4.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbUp16;
