import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M0.5 0.5H31.5V31.5H0.5z" />
      </svg>
    );
  },
);

export default PlusRectangle32;
