import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.85751 11.9121C4.92719 12.9924 5.69475 14.6662 7.12046 14.6662H10.6666V26.9996C10.6666 28.2882 11.7113 29.3329 12.9999 29.3329H18.9999C20.2886 29.3329 21.3332 28.2882 21.3332 26.9996V14.6662H24.8794C26.3051 14.6662 27.0727 12.9924 26.1423 11.9121L17.768 2.18706C16.8371 1.10602 15.1627 1.10602 14.2318 2.18706L5.85751 11.9121Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled32;
