import * as React from 'react';
import { IconProps } from './types';

export const Link20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.78125 8.46875L2.94086 11.3091C2.17837 12.0716 1.75 13.1058 1.75 14.1841V14.1841C1.75 16.4297 3.57035 18.25 5.81586 18.25V18.25C6.8942 18.25 7.92837 17.8216 8.69086 17.0591L11.5312 14.2188M14.2188 11.5312L17.0591 8.69086C17.8216 7.92837 18.25 6.8942 18.25 5.81586V5.81586C18.25 3.57035 16.4297 1.75 14.1841 1.75V1.75C13.1058 1.75 12.0716 2.17837 11.3091 2.94086L8.46875 5.78125M6.75 13.25L13.25 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Link20;
