import * as React from 'react';
import { IconProps } from './types';

export const YouTubeFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.1758 5.64453C19.5977 7.12109 19.5977 10.2852 19.5977 10.2852C19.5977 10.2852 19.5977 13.4141 19.1758 14.9258C18.9648 15.7695 18.2969 16.4023 17.4883 16.6133C15.9766 17 10 17 10 17C10 17 3.98828 17 2.47656 16.6133C1.66797 16.4023 1 15.7695 0.789062 14.9258C0.367188 13.4141 0.367188 10.2852 0.367188 10.2852C0.367188 10.2852 0.367188 7.12109 0.789062 5.64453C1 4.80078 1.66797 4.13281 2.47656 3.92188C3.98828 3.5 10 3.5 10 3.5C10 3.5 15.9766 3.5 17.4883 3.92188C18.2969 4.13281 18.9648 4.80078 19.1758 5.64453ZM8.03125 13.1328L13.0234 10.2852L8.03125 7.4375V13.1328Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default YouTubeFilled20;
