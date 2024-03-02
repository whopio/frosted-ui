import * as React from 'react';
import { IconProps } from './types';

export const Gift24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6.75L12 22.25M12 6.75L12.5362 4.06915C12.8059 2.72066 13.9899 1.75 15.3651 1.75H15.75C17.1307 1.75 18.25 2.86929 18.25 4.25C18.25 5.63071 17.1307 6.75 15.75 6.75H12ZM12 6.75L11.4638 4.06915C11.1941 2.72066 10.0101 1.75 8.63493 1.75H8.25C6.86929 1.75 5.75 2.86929 5.75 4.25C5.75 5.63071 6.86929 6.75 8.25 6.75H12ZM3.75 11.2588H20.25V20C20.25 21.2426 19.2426 22.25 18 22.25H6C4.75736 22.25 3.75 21.2427 3.75 20V11.2588ZM1.75 10.0088V8.01758C1.75 7.32722 2.30964 6.76758 3 6.76758H21C21.6904 6.76758 22.25 7.32722 22.25 8.01758V10.0088C22.25 10.6991 21.6904 11.2588 21 11.2588H3C2.30964 11.2588 1.75 10.6991 1.75 10.0088Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Gift24;
