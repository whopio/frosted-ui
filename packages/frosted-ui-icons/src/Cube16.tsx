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
          d="M8.00013 8.00002V13.6667M8.00013 8.00002L3 5.18751M8.00013 8.00002L12.8418 5.2765M13.5 5.68605V10.314C13.5 10.7957 13.2402 11.2399 12.8203 11.4761L8.65367 13.8198C8.2478 14.0482 7.7522 14.0482 7.34633 13.8198L3.17965 11.4761C2.75981 11.2399 2.5 10.7957 2.5 10.314V5.68605C2.5 5.20436 2.75981 4.76011 3.17965 4.52395L7.34633 2.18021C7.7522 1.95189 8.2478 1.95189 8.65367 2.18021L12.8203 4.52395C13.2402 4.76011 13.5 5.20436 13.5 5.68605Z"
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
