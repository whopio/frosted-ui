import * as React from 'react';
import { IconProps } from './types';

export const Code20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.125 16.875L11.875 3.125M15.2083 6.45833L17.4666 8.85775C18.0706 9.4995 18.0706 10.5005 17.4666 11.1422L15.2083 13.5417M4.79166 13.5417L2.53341 11.1422C1.92941 10.5005 1.92941 9.4995 2.53341 8.85775L4.79166 6.45833"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code20;
