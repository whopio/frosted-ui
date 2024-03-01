import * as React from 'react';
import { IconProps } from './types';

export const Pencil12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.24997 2.74997L1.25 7.74994L0.75 11.2499L4.25 10.7499L9.25 5.74994M6.24997 2.74997L7.6754 1.32454C8.04327 0.956669 8.54221 0.75 9.06247 0.75V0.75C9.5827 0.75 10.0816 0.956651 10.4495 1.3245L10.6754 1.55044C11.0433 1.9183 11.25 2.41723 11.25 2.93747V2.93747C11.25 3.45768 11.0433 3.9566 10.6755 4.32444L9.25 5.74994M6.24997 2.74997L9.25 5.74994"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Pencil12;
