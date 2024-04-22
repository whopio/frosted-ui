import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.66666 2.5L12.3333 2.5C12.5174 2.5 12.6667 2.64924 12.6667 2.83333L12.6667 9.16667C12.6667 9.35076 12.8159 9.5 13 9.5L15.955 9.5C16.2376 9.5 16.392 9.82962 16.2111 10.0467L10.2561 17.1927C10.1228 17.3526 9.87718 17.3526 9.74392 17.1927L3.78893 10.0467C3.60801 9.82962 3.76239 9.5 4.045 9.5L6.99999 9.5C7.18409 9.5 7.33332 9.35076 7.33332 9.16667L7.33332 2.83333C7.33332 2.64924 7.48256 2.5 7.66666 2.5Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M16.7872 10.5269L16.2111 10.0467L16.7872 10.5269C17.3752 9.82126 16.8735 8.75 15.955 8.75L13.4167 8.75L13.4167 2.83333C13.4167 2.23503 12.9316 1.75 12.3333 1.75L7.66666 1.75C7.06835 1.75 6.58332 2.23502 6.58332 2.83333L6.58332 8.75L4.045 8.75C3.12651 8.75 2.62476 9.82126 3.21276 10.5269L9.16775 17.6728C9.60086 18.1926 10.3991 18.1926 10.8322 17.6729L10.2561 17.1927L10.8322 17.6728L16.7872 10.5269Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled20;
