import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.71437 13.5833H4.99996C3.84938 13.5833 2.91663 14.516 2.91663 15.6666V25.6666C2.91663 26.8172 3.84938 27.75 4.99996 27.75H23.2293C25.5767 27.75 27.5721 26.0352 27.9252 23.7145L29.0412 16.3812C29.4786 13.5063 27.2533 10.9166 24.3452 10.9166H18.2308L18.8633 6.85964C19.1867 4.7855 17.5757 2.91663 15.4813 2.91663C14.7023 2.91663 13.9853 3.35141 13.6276 4.04588L8.71437 13.5833ZM8.24996 26.25V15.0833H4.99996C4.67779 15.0833 4.41663 15.3444 4.41663 15.6666V25.6666C4.41663 25.9888 4.67779 26.25 4.99996 26.25H8.24996Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ThumbUpFilled32;
