import * as React from 'react';
import { IconProps } from './types';

export const MoonSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M28.3308 15.7483C26.9185 16.7467 25.1944 17.3333 23.3333 17.3333C18.5468 17.3333 14.6667 13.4532 14.6667 8.66666C14.6667 6.80554 15.2533 5.08144 16.2517 3.66918C16.168 3.6675 16.0841 3.66666 16 3.66666C9.18848 3.66666 3.66666 9.18849 3.66666 16C3.66666 22.8115 9.18848 28.3333 16 28.3333C22.8115 28.3333 28.3333 22.8115 28.3333 16C28.3333 15.9159 28.3325 15.832 28.3308 15.7483Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MoonSize32;
