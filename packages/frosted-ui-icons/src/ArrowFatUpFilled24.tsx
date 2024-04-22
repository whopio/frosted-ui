import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.8 21H9.2C8.97909 21 8.8 20.8209 8.8 20.6V13C8.8 12.7791 8.62091 12.6 8.4 12.6H4.85402C4.51488 12.6 4.32962 12.2045 4.54673 11.9439L11.6927 3.36875C11.8526 3.17684 12.1474 3.17684 12.3073 3.36875L19.4533 11.9439C19.6704 12.2045 19.4851 12.6 19.146 12.6H15.6C15.3791 12.6 15.2 12.7791 15.2 13V20.6C15.2 20.8209 15.0209 21 14.8 21Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M11.1165 2.88861L11.6927 3.36875L11.1165 2.88861L3.97056 11.4638C3.34637 12.2128 3.879 13.35 4.85402 13.35H8.05V20.6C8.05 21.2351 8.56487 21.75 9.2 21.75H14.8C15.4351 21.75 15.95 21.2351 15.95 20.6V13.35H19.146C20.121 13.35 20.6536 12.2128 20.0294 11.4638L12.8835 2.88861C12.4237 2.33689 11.5763 2.33689 11.1165 2.88861Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled24;
