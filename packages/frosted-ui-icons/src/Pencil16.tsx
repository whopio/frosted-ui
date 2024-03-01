import * as React from 'react';
import { IconProps } from './types';

export const Pencil16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 14.2499L5.75 13.7499 13.4796 6.24768C13.9721 5.76969 14.25 5.11264 14.25 4.42634 14.25 3.75315 13.9826 3.10754 13.5065 2.63153L13.3684 2.4934C12.8924 2.01741 12.2468 1.75 11.5736 1.75 10.8873 1.75 10.2302 2.02794 9.75216 2.52044L2.25 10.2499 1.75 14.2499zM8.26514 4.01514L11.8751 7.62503"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Pencil16;
