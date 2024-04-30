import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.12495 10.6251H4.87497C4.59882 10.6251 4.37497 10.4012 4.37497 10.1251V5.1251H2.67016C2.4563 5.1251 2.34117 4.87402 2.48072 4.71197L5.6211 1.06509C5.82055 0.833445 6.17935 0.833445 6.37885 1.06509L9.5192 4.71197C9.65875 4.87402 9.54365 5.1251 9.32975 5.1251H7.62495V10.1251C7.62495 10.4012 7.4011 10.6251 7.12495 10.6251Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp12;
