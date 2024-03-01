import * as React from 'react';
import { IconProps } from './types';

export const Bell32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.25 20.0723V13C26.25 7.33908 21.6609 2.75 16 2.75 10.3391 2.75 5.75 7.33908 5.75 13V20.0723C5.75 21.2133 5.35979 22.3199 4.64414 23.2085L3.91736 24.1109C3.54853 24.5689 3.87452 25.25 4.46254 25.25H27.5375C28.1255 25.25 28.4515 24.5689 28.0826 24.1109L27.3559 23.2085C26.6402 22.3199 26.25 21.2133 26.25 20.0723zM11.75 25.25V26C11.75 28.3472 13.6528 30.25 16 30.25V30.25C18.3472 30.25 20.25 28.3472 20.25 26V25.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bell32;
