import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
        <g clipPath="url(#clip0_1122_37)">
          <path
            d="M0 6.06564C0 2.75193 2.68629 0.0656433 6 0.0656433C9.31371 0.0656433 12 2.75193 12 6.06564C12 9.37935 9.31371 12.0656 6 12.0656C2.68629 12.0656 0 9.37935 0 6.06564ZM8.37226 3.62755C8.66515 3.92045 8.66515 4.39532 8.37226 4.68821L7.06054 5.99992L8.37238 7.31176C8.66528 7.60466 8.66528 8.07953 8.37238 8.37242C8.07949 8.66532 7.60462 8.66532 7.31172 8.37242L5.99988 7.06058L4.68804 8.37242C4.39515 8.66532 3.92028 8.66532 3.62738 8.37242C3.33449 8.07953 3.33449 7.60466 3.62738 7.31176L4.93922 5.99992L3.62751 4.68821C3.33462 4.39532 3.33462 3.92045 3.62751 3.62755C3.92041 3.33466 4.39528 3.33466 4.68817 3.62755L5.99988 4.93926L7.31159 3.62755C7.60449 3.33466 8.07936 3.33466 8.37226 3.62755Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1122_37">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XCircleFilled12;
