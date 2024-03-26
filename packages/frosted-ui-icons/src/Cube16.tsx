import * as React from 'react';
import { IconProps } from './types';

export const Cube16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.00013 8V13.6667M8.00013 8L3 5.18749M8.00013 8L12.8418 5.27648M13.5 5.68603V10.3139C13.5 10.7957 13.2402 11.2399 12.8203 11.4761L8.65367 13.8198C8.2478 14.0481 7.7522 14.0481 7.34633 13.8198L3.17965 11.4761C2.75981 11.2399 2.5 10.7957 2.5 10.3139V5.68603C2.5 5.20434 2.75981 4.76009 3.17965 4.52393L7.34633 2.18019C7.7522 1.95187 8.2478 1.95187 8.65367 2.18019L12.8203 4.52393C13.2402 4.76009 13.5 5.20434 13.5 5.68603Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Cube16;
