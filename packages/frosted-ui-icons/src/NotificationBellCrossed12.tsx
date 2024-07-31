import * as React from 'react';
import { IconProps } from './types';

export const NotificationBellCrossed12 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M9.89858 4.78788V7.60317C9.89858 7.87418 9.98728 8.13737 10.1505 8.35071L10.4416 8.7311C10.5816 8.91408 10.4542 9.18182 10.2272 9.18182H7.53103M7.53103 9.18182V9.63636C7.53103 10.3895 6.93479 11 6.19929 11C5.46379 11 4.86755 10.3895 4.86755 9.63636V9.18182H7.53103ZM7 1.08897C6.74216 1.03071 6.47423 1 6.19929 1C4.15623 1 2.5 2.69589 2.5 4.78788V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 9L10.5 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

export default NotificationBellCrossed12;
