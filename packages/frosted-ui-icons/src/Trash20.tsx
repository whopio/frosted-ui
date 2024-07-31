import * as React from 'react';
import { IconProps } from './types';

export const Trash20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 4.75L15.3614 17.0973C15.299 18.3038 14.3025 19.25 13.0944 19.25H6.90565C5.69753 19.25 4.70109 18.3038 4.63868 17.0973L3.00003 4.75M13.2501 4.75L12.8825 2.78928C12.6608 1.60685 11.6283 0.75 10.4253 0.75H9.57493C8.37189 0.75 7.33946 1.60685 7.11775 2.78928L6.75011 4.75M2 4.75H18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Trash20;
