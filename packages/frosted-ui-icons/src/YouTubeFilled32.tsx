import * as React from 'react';
import { IconProps } from './types';

export const YouTubeFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M30.2734 9.33594C30.9297 11.6328 30.9297 16.5547 30.9297 16.5547C30.9297 16.5547 30.9297 21.4219 30.2734 23.7734C29.9453 25.0859 28.9062 26.0703 27.6484 26.3984C25.2969 27 16 27 16 27C16 27 6.64844 27 4.29688 26.3984C3.03906 26.0703 2 25.0859 1.67188 23.7734C1.01562 21.4219 1.01562 16.5547 1.01562 16.5547C1.01562 16.5547 1.01562 11.6328 1.67188 9.33594C2 8.02344 3.03906 6.98438 4.29688 6.65625C6.64844 6 16 6 16 6C16 6 25.2969 6 27.6484 6.65625C28.9062 6.98438 29.9453 8.02344 30.2734 9.33594ZM12.9375 20.9844L20.7031 16.5547L12.9375 12.125V20.9844Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default YouTubeFilled32;
