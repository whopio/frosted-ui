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
            d="M0 6.06567C0 2.75197 2.68629 0.0656738 6 0.0656738C9.31371 0.0656738 12 2.75197 12 6.06567C12 9.37938 9.31371 12.0657 6 12.0657C2.68629 12.0657 0 9.37938 0 6.06567ZM8.37226 3.62758C8.66515 3.92048 8.66515 4.39535 8.37226 4.68824L7.06054 5.99995L8.37238 7.31179C8.66528 7.60469 8.66528 8.07956 8.37238 8.37245C8.07949 8.66535 7.60462 8.66535 7.31172 8.37245L5.99988 7.06061L4.68804 8.37245C4.39515 8.66535 3.92028 8.66535 3.62738 8.37245C3.33449 8.07956 3.33449 7.60469 3.62738 7.31179L4.93922 5.99995L3.62751 4.68824C3.33462 4.39535 3.33462 3.92048 3.62751 3.62758C3.92041 3.33469 4.39528 3.33469 4.68817 3.62758L5.99988 4.93929L7.31159 3.62758C7.60449 3.33469 8.07936 3.33469 8.37226 3.62758Z"
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
