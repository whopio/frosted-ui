import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9992 5.82754C15.9992 4.3857 14.2926 3.62411 13.2194 4.58712L1.88423 14.7598C1.14625 15.422 1.14626 16.5783 1.88423 17.2406L13.2194 27.4131C14.2926 28.3762 15.9992 27.6146 15.9992 26.1727V21.6734C20.9906 21.74 23.6024 22.3158 25.1739 23.204C26.767 24.1044 27.4026 25.3758 28.4063 27.3835L28.4382 27.4474C28.6456 27.8622 29.111 28.0799 29.5624 27.9734C30.0138 27.8668 30.3326 27.4639 30.3326 27.0002C30.3326 21.313 29.5967 17.06 27.1716 14.2619C24.856 11.59 21.2084 10.4683 15.9992 10.345V5.82754Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled32;
