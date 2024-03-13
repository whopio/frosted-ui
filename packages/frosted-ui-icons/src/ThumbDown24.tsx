import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 13.25H3.75C3.19772 13.25 2.75 12.8023 2.75 12.25V4.75C2.75 4.1977 3.19772 3.75 3.75 3.75H6.75M6.75 3.75V13L10.7208 20.708C10.8922 21.0408 11.2365 21.25 11.611 21.25C12.8384 21.25 13.7808 20.1546 13.5917 18.9419L13.0161 15.25H18.2589C20.0956 15.25 21.5011 13.6144 21.2248 11.7987L20.3878 6.2987C20.1648 4.833 18.9046 3.75 17.422 3.75H6.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbDown24;
