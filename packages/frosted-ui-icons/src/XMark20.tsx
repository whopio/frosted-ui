import * as React from 'react';
import { IconProps } from './types';

export const XMark20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M15.3033 16.3639C15.5962 16.6567 16.0711 16.6567 16.364 16.3639C16.6569 16.071 16.6569 15.5961 16.364 15.3032L11.0607 9.9999L16.364 4.69661C16.6569 4.40372 16.6569 3.92885 16.364 3.63595C16.0711 3.34306 15.5962 3.34306 15.3033 3.63595L10 8.93924L4.69671 3.63593C4.40382 3.34304 3.92894 3.34304 3.63605 3.63593C3.34316 3.92882 3.34316 4.4037 3.63605 4.69659L8.93937 9.9999L3.63605 15.3032C3.34316 15.5961 3.34316 16.071 3.63605 16.3639C3.92895 16.6568 4.40382 16.6568 4.69671 16.3639L10 11.0606L15.3033 16.3639Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark20;
