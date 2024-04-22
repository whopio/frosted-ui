import * as React from 'react';
import { IconProps } from './types';

export const Burger16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.125 9.08861C13.746 9.08085 13.3468 8.89953 13.1101 8.54462 12.6264 7.81895 11.56 7.81895 11.0762 8.54462 10.5925 9.27028 9.52614 9.27028 9.04235 8.54462 8.55856 7.81895 7.49224 7.81895 7.00845 8.54462 6.52466 9.27028 5.45834 9.27028 4.97455 8.54462 4.49076 7.81895 3.42444 7.81895 2.94065 8.54462 2.69348 8.91537 2.27092 9.09669 1.875 9.08861M11.9661 14.2656H4.0339C2.9106 14.2656 2 13.4175 2 12.2942 2 11.7326 2.45531 11.2773 3.01695 11.2773H12.9831C13.5447 11.2773 14 11.7326 14 12.2942 14 13.4175 13.0894 14.2656 11.9661 14.2656zM12.9831 5.96875H3.01695C2.45531 5.96875 2 5.36244 2 4.8008 2 3.11587 3.36592 1.74995 5.05085 1.74995H10.9492C12.6341 1.74995 14 3.11587 14 4.8008 14 5.36244 13.5447 5.96875 12.9831 5.96875z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Burger16;
