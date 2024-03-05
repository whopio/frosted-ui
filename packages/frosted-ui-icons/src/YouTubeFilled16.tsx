import * as React from 'react';
import { IconProps } from './types';

export const YouTubeFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.1367 4.16797C15.4648 5.31641 15.4648 7.77734 15.4648 7.77734C15.4648 7.77734 15.4648 10.2109 15.1367 11.3867C14.9727 12.043 14.4531 12.5352 13.8242 12.6992C12.6484 13 8 13 8 13C8 13 3.32422 13 2.14844 12.6992C1.51953 12.5352 1 12.043 0.835938 11.3867C0.507812 10.2109 0.507812 7.77734 0.507812 7.77734C0.507812 7.77734 0.507812 5.31641 0.835938 4.16797C1 3.51172 1.51953 2.99219 2.14844 2.82812C3.32422 2.5 8 2.5 8 2.5C8 2.5 12.6484 2.5 13.8242 2.82812C14.4531 2.99219 14.9727 3.51172 15.1367 4.16797ZM6.46875 9.99219L10.3516 7.77734L6.46875 5.5625V9.99219Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default YouTubeFilled16;
