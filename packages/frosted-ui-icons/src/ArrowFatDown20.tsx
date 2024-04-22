import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.7872 10.5269L16.211 10.0467L16.7872 10.5269C17.3752 9.82126 16.8734 8.75 15.9549 8.75L13.4166 8.75L13.4166 2.83333C13.4166 2.23503 12.9316 1.75 12.3333 1.75L7.66663 1.75C7.06832 1.75 6.58329 2.23502 6.58329 2.83333L6.58329 8.75L4.04497 8.75C3.12648 8.75 2.62473 9.82126 3.21273 10.5269L9.16772 17.6728C9.60083 18.1926 10.3991 18.1926 10.8322 17.6729L10.256 17.1927L10.8322 17.6728L16.7872 10.5269Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDown20;
