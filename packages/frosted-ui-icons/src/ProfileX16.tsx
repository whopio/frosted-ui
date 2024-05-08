import * as React from 'react';
import { IconProps } from './types';

export const ProfileX16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.3341 10.6667L12.0008 12M12.0008 12L10.6675 13.3333M12.0008 12L10.6675 10.6667M12.0008 12L13.3341 13.3333M7.9024 8.83421C5.69028 8.87254 4.01455 10.2039 3.32244 12.0753C3.0499 12.8121 3.67909 13.5 4.46476 13.5H8.16746M7.9024 8.83421C7.93506 8.83361 7.96786 8.83334 8.0008 8.83334C8.34753 8.83334 8.6814 8.86494 9.0008 8.92528M7.9024 8.83421C7.469 8.84174 7.0564 8.89888 6.66753 9.00001M10.5008 4.33334C10.5008 5.71406 9.38146 6.83334 8.0008 6.83334C6.62007 6.83334 5.50078 5.71406 5.50078 4.33334C5.50078 2.95263 6.62007 1.83334 8.0008 1.83334C9.38146 1.83334 10.5008 2.95263 10.5008 4.33334Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileX16;
