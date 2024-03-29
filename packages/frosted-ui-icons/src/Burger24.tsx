import * as React from 'react';
import { IconProps } from './types';

export const Burger24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M21.1875 13.6329C20.619 13.6213 20.0201 13.3493 19.6652 12.8169 18.9395 11.7284 17.3401 11.7284 16.6144 12.8169 15.8887 13.9054 14.2892 13.9054 13.5635 12.8169 12.8378 11.7284 11.2384 11.7284 10.5127 12.8169 9.78699 13.9054 8.18751 13.9054 7.46183 12.8169 6.73614 11.7284 5.13666 11.7284 4.41098 12.8169 4.04022 13.3731 3.40639 13.645 2.8125 13.6329M17.9492 21.1797H6.05085C4.3659 21.1797 3 19.9075 3 18.2226 3 17.3801 3.68297 16.6971 4.52542 16.6971H19.4746C20.317 16.6971 21 17.3801 21 18.2226 21 19.9075 19.6341 21.1797 17.9492 21.1797zM19.4746 9.1875H4.52542C3.68297 9.1875 3 8.27803 3 7.43557 3 4.90818 5.04887 2.8593 7.57627 2.8593H16.4237C18.9511 2.8593 21 4.90818 21 7.43557 21 8.27803 20.317 9.1875 19.4746 9.1875z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Burger24;
