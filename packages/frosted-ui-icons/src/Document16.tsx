import * as React from 'react';
import { IconProps } from './types';

export const Document16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.7237 5.75H10.8926C9.84732 5.75 8.99996 4.90264 8.99996 3.85737V0.75M13.7499 5.59025V13.3574C13.7499 14.4026 12.9026 15.25 11.8573 15.25H4.14257C3.0973 15.25 2.24994 14.4026 2.24994 13.3574V2.64263C2.24994 1.59736 3.0973 0.75 4.14257 0.75H8.98278C9.49298 0.75 9.98157 0.955981 10.3378 1.32124L13.2123 4.26886C13.557 4.62233 13.7499 5.09652 13.7499 5.59025Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Document16;
