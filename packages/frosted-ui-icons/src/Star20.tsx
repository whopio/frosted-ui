import * as React from 'react';
import { IconProps } from './types';

export const Star20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.42939 2.75623C9.609 2.20344 10.391 2.20344 10.5707 2.75623L12.0993 7.4608C12.1796 7.70801 12.41 7.87539 12.6699 7.87539H17.6166C18.1978 7.87539 18.4395 8.61916 17.9692 8.9608L13.9673 11.8684C13.757 12.0212 13.669 12.292 13.7493 12.5392L15.2779 17.2438C15.4576 17.7966 14.8249 18.2562 14.3546 17.9146L10.3527 15.007C10.1424 14.8542 9.85765 14.8542 9.64735 15.007L5.64541 17.9146C5.17518 18.2562 4.54249 17.7966 4.7221 17.2438L6.25071 12.5392C6.33104 12.292 6.24304 12.0212 6.03275 11.8684L2.0308 8.9608C1.56057 8.61916 1.80224 7.87539 2.38348 7.87539H7.33015C7.59009 7.87539 7.82046 7.70801 7.90078 7.4608L9.42939 2.75623Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star20;