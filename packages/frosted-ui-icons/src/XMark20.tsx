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
          d="M15.3033 16.3639C15.5962 16.6567 16.0711 16.6567 16.3639 16.3639C16.6568 16.071 16.6568 15.5961 16.3639 15.3032L11.0607 9.9999L16.3639 4.69661C16.6568 4.40372 16.6568 3.92885 16.3639 3.63595C16.0711 3.34306 15.5962 3.34306 15.3033 3.63595L9.99999 8.93924L4.69668 3.63593C4.40379 3.34304 3.92891 3.34304 3.63602 3.63593C3.34313 3.92882 3.34313 4.4037 3.63602 4.69659L8.93934 9.9999L3.63602 15.3032C3.34313 15.5961 3.34313 16.071 3.63602 16.3639C3.92892 16.6568 4.40379 16.6568 4.69668 16.3639L10 11.0606L15.3033 16.3639Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark20;
