import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.75 10.75H3.75C3.19772 10.75 2.75 11.1977 2.75 11.75V19.25C2.75 19.8023 3.19772 20.25 3.75 20.25H6.75M6.75 20.25V11L10.7208 3.29204C10.8922 2.95918 11.2365 2.75 11.611 2.75C12.8384 2.75 13.7808 3.84535 13.5917 5.0581L13.0161 8.75H18.2589C20.0956 8.75 21.5011 10.3856 21.2248 12.2013L20.3878 17.7013C20.1648 19.167 18.9046 20.25 17.422 20.25H6.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbUp24;
