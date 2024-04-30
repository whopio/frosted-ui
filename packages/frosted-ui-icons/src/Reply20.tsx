import * as React from 'react';
import { IconProps } from './types';

export const Reply20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.59549 9.68954L8.68001 3.33162C8.94826 3.09087 9.37493 3.28127 9.37493 3.64172V7.08294C16.4583 7.08294 18.3333 9.79129 18.3333 16.8746C17.0833 14.3746 16.4583 12.9163 9.37493 12.9163V16.3575C9.37493 16.718 8.94826 16.9084 8.68001 16.6676L1.59549 10.3097C1.411 10.1441 1.411 9.85504 1.59549 9.68954Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply20;
