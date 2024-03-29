import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 6.25C3.5 4.73122 4.73122 3.5 6.25 3.5H17.75C19.2688 3.5 20.5 4.73122 20.5 6.25V16.3778L17.9651 13.6926C17.5477 13.2505 16.9667 13 16.3587 13C15.6886 13 15.0547 13.3042 14.6354 13.827L12.6141 16.3473L8.47408 11.7268C8.05967 11.2643 7.46802 11 6.84702 11C6.1843 11 5.5574 11.3008 5.14277 11.8178L3.5 13.8661V6.25ZM17.75 22H16.0036H15.9969H6.25C3.90279 22 2 20.0972 2 17.75V16.0059V15.9931V6.25C2 3.90279 3.90279 2 6.25 2H17.75C20.0972 2 22 3.90279 22 6.25V17.75C22 20.0972 20.0972 22 17.75 22ZM15.25 8C15.25 9.24264 14.2426 10.25 13 10.25C11.7574 10.25 10.75 9.24264 10.75 8C10.75 6.75736 11.7574 5.75 13 5.75C14.2426 5.75 15.25 6.75736 15.25 8Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default PhotoFilled24;
