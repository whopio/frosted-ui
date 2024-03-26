import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.16667 7.66665L7.33333 8.83331L9.83333 6.33333M13.5 7.94158V4.62768C13.5 4.05377 13.1327 3.54425 12.5883 3.36277L8.42167 1.97388C8.14793 1.88265 7.85207 1.88265 7.57833 1.97388L3.41169 3.36277C2.86724 3.54425 2.5 4.05377 2.5 4.62768V7.94158C2.5 11.2565 5.33333 12.8333 8 14.2719C10.6667 12.8333 13.5 11.2565 13.5 7.94158Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ShieldCheckmark16;
