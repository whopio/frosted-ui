import * as React from 'react';
import { IconProps } from './types';

export const Link32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.28125 13.9688L5.56218 17.6878C4.40186 18.8481 3.75 20.4219 3.75 22.0628V22.0628C3.75 25.4799 6.5201 28.25 9.93718 28.25V28.25C11.5781 28.25 13.1519 27.5981 14.3122 26.4378L18.0312 22.7188M22.7188 18.0312L26.4378 14.3122C27.5981 13.1519 28.25 11.5781 28.25 9.93718V9.93718C28.25 6.5201 25.4799 3.75 22.0628 3.75V3.75C20.4219 3.75 18.8481 4.40186 17.6878 5.56218L13.9688 9.28125M10.75 21.25L21.25 10.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Link32;
