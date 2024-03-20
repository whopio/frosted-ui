import * as React from 'react';
import { IconProps } from './types';

export const Sparkle24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_882_1115)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.9762 5.06184L16.7496 1.29425C16.6439.969682 16.3413.75 16 .75 15.6587.75 15.3561.969683 15.2504 1.29425L14.0238 5.06184C13.8753 5.5178 13.5178 5.87531 13.0618 6.02376L9.29425 7.25043C8.96968 7.35611 8.75 7.65866 8.75 8 8.75 8.34134 8.96968 8.64389 9.29425 8.74957L13.0618 9.97624C13.5178 10.1247 13.8753 10.4822 14.0238 10.9382L15.2504 14.7058C15.3561 15.0303 15.6587 15.25 16 15.25 16.3413 15.25 16.6439 15.0303 16.7496 14.7058L17.9762 10.9382C18.1247 10.4822 18.4822 10.1247 18.9382 9.97624L22.7058 8.74957C23.0303 8.64389 23.25 8.34134 23.25 8 23.25 7.65866 23.0303 7.3561 22.7058 7.25043L18.9382 6.02376C18.4822 5.87531 18.1247 5.5178 17.9762 5.06184zM11.9081 17.03L8.54186 15.9408C8.31282 15.8667 8.13328 15.6872 8.05917 15.4581L6.97001 12.0919C6.90406 11.8881 6.71424 11.75 6.5 11.75 6.28576 11.75 6.09594 11.8881 6.02999 12.0919L4.94083 15.4581C4.86672 15.6872 4.68718 15.8667 4.45814 15.9408L1.09192 17.03C.88809 17.0959.75 17.2858.75 17.5.75 17.7142.88809 17.9041 1.09192 17.97L4.45814 19.0592C4.68718 19.1333 4.86672 19.3128 4.94083 19.5419L6.02999 22.9081C6.09595 23.1119 6.28576 23.25 6.5 23.25 6.71424 23.25 6.90406 23.1119 6.97001 22.9081L8.05917 19.5419C8.13328 19.3128 8.31282 19.1333 8.54186 19.0592L11.9081 17.97C12.1119 17.9041 12.25 17.7142 12.25 17.5 12.25 17.2858 12.1119 17.0959 11.9081 17.03z" />
        </g>
        <defs>
          <clipPath id="clip0_882_1115">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Sparkle24;
