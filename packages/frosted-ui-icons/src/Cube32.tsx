import * as React from 'react';
import { IconProps } from './types';

export const Cube32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.0003 16V27.3333M16.0003 16L6 10.375M16.0003 16L25.6836 10.553M27 11.3721V20.6279C27 21.5913 26.4804 22.4797 25.6407 22.9521L17.3073 27.6396C16.4956 28.0963 15.5044 28.0963 14.6927 27.6396L6.35931 22.9521C5.51963 22.4797 5 21.5913 5 20.6279V11.3721C5 10.4087 5.51963 9.52019 6.35931 9.04787L14.6927 4.36037C15.5044 3.90375 16.4956 3.90375 17.3073 4.36037L25.6407 9.04787C26.4804 9.52019 27 10.4087 27 11.3721Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Cube32;
