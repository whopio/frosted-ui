import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3.6609 12.5818C3.07945 11.9066 3.55917 10.8604 4.45024 10.8604H6.66658V3.15206C6.66658 2.34664 7.3195 1.69373 8.12491 1.69373H11.8749C12.6803 1.69373 13.3332 2.34665 13.3332 3.15206V10.8604H15.5496C16.4406 10.8604 16.9204 11.9066 16.3389 12.5818L11.105 18.6599C10.5231 19.3356 9.47665 19.3356 8.89481 18.6599L3.6609 12.5818Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled20;
