import * as React from 'react';
import { IconProps } from './types';

export const ProfileX24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.0012 16L18.0012 18M18.0012 18L16.0012 20M18.0012 18L16.0012 16M18.0012 18L20.0012 20M11.8536 13.2513C8.53542 13.3088 6.02183 15.3058 4.98366 18.1129C4.57486 19.2182 5.51864 20.25 6.69715 20.25H12.2512M11.8536 13.2513C11.9026 13.2504 11.9518 13.25 12.0012 13.25C12.5213 13.25 13.0221 13.2974 13.5012 13.3879M11.8536 13.2513C11.2035 13.2626 10.5846 13.3483 10.0013 13.5M15.7512 6.5C15.7512 8.57107 14.0722 10.25 12.0012 10.25C9.93011 10.25 8.25118 8.57107 8.25118 6.5C8.25118 4.42893 9.93011 2.75 12.0012 2.75C14.0722 2.75 15.7512 4.42893 15.7512 6.5Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileX24;
