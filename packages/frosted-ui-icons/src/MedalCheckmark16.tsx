import * as React from 'react';
import { IconProps } from './types';

export const MedalCheckmark16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.99963 12.5C8.81338 12.5 10.2837 11.0297 10.2837 9.21593C10.2837 7.40219 8.81338 5.93186 6.99963 5.93186C5.18589 5.93186 3.71556 7.40219 3.71556 9.21593C3.71556 11.0297 5.18589 12.5 6.99963 12.5ZM6.99963 14C9.6418 14 11.7837 11.8581 11.7837 9.21593C11.7837 6.57377 9.6418 4.43187 6.99963 4.43187C4.35747 4.43187 2.21557 6.57377 2.21557 9.21593C2.21557 11.8581 4.35747 14 6.99963 14Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5.68547 5.09711C5.68547 5.09711 4.73217 3.96488 4.37002 2.14123 4.21942 1.38284 3.60589.749997 2.83269.749997H1.72797C1.14808.749997.667255 1.22481.772237 1.79512 1.31324 4.73415 3.99949 6.14042 3.99949 6.14042M8.31398 5.09711C8.31398 5.09711 9.26728 3.96488 9.62943 2.14123 9.78003 1.38284 10.3936.749997 11.1668.749997H12.2715C12.8514.749997 13.3322 1.22481 13.2272 1.79512 12.6862 4.73415 9.99997 6.14042 9.99997 6.14042"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.51075 9.46395L6.33792 10.2912L8.48833 8.14065"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MedalCheckmark16;
