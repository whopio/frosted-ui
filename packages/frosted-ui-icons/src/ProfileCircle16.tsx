import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_1417)">
          <circle
            cx="8"
            cy="8"
            r="6.75"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3931 13.125L12.8814 13.6942C13.0475 13.5517 13.1431 13.3438 13.1431 13.125C13.1431 12.9062 13.0475 12.6983 12.8814 12.5558L12.3931 13.125ZM3.60706 13.125L3.11869 12.5558C2.95262 12.6983 2.85705 12.9062 2.85706 13.125C2.85706 13.3438 2.95262 13.5517 3.11869 13.6942L3.60706 13.125ZM11.9047 12.5558C10.8549 13.4565 9.49188 14 8.00005 14V15.5C9.86353 15.5 11.57 14.8194 12.8814 13.6942L11.9047 12.5558ZM8.00005 14C6.50823 14 5.14525 13.4565 4.09542 12.5558L3.11869 13.6942C4.43017 14.8194 6.13658 15.5 8.00005 15.5V14ZM4.09542 13.6942C5.14526 12.7935 6.50825 12.25 8.00008 12.25V10.75C6.13659 10.75 4.43017 11.4306 3.11869 12.5558L4.09542 13.6942ZM8.00008 12.25C9.4919 12.25 10.8549 12.7935 11.9047 13.6942L12.8814 12.5558C11.57 11.4306 9.86355 10.75 8.00008 10.75V12.25Z"
            fill={color}
          />
          <circle
            cx="8"
            cy="7"
            r="2.25"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1417">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProfileCircle16;
