import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.71437 18.4167H4.99996C3.84938 18.4167 2.91663 17.484 2.91663 16.3334V6.33337C2.91663 5.18275 3.84938 4.25004 4.99996 4.25004H23.2293C25.5767 4.25004 27.5721 5.96479 27.9252 8.28547L29.0412 15.6188C29.4786 18.4937 27.2533 21.0834 24.3452 21.0834H18.2308L18.8633 25.1404C19.1867 27.2145 17.5757 29.0834 15.4813 29.0834C14.7023 29.0834 13.9853 28.6486 13.6276 27.9541L8.71437 18.4167ZM8.24996 5.75004V16.9167H4.99996C4.67779 16.9167 4.41663 16.6556 4.41663 16.3334V6.33337C4.41663 6.0112 4.67779 5.75004 4.99996 5.75004H8.24996Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbDownFilled32;
