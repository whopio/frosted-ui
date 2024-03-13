import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.6667 16V15.9867M11 16C11 16.1841 10.8508 16.3333 10.6667 16.3333 10.4826 16.3333 10.3333 16.1841 10.3333 16 10.3333 15.8159 10.4826 15.6667 10.6667 15.6667 10.8508 15.6667 11 15.8159 11 16zM16 16V15.9867M16.3333 16C16.3333 16.1841 16.1841 16.3333 16 16.3333 15.8159 16.3333 15.6667 16.1841 15.6667 16 15.6667 15.8159 15.8159 15.6667 16 15.6667 16.1841 15.6667 16.3333 15.8159 16.3333 16zM21.3333 16V15.9867M21.6667 16C21.6667 16.1841 21.5175 16.3333 21.3333 16.3333 21.1492 16.3333 21 16.1841 21 16 21 15.8159 21.1492 15.6667 21.3333 15.6667 21.5175 15.6667 21.6667 15.8159 21.6667 16z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28.3333 16C28.3333 22.8115 22.8115 28.3333 16 28.3333C9.1885 28.3333 3.66667 22.8115 3.66667 16C3.66667 9.18849 9.1885 3.66666 16 3.66666C22.8115 3.66666 28.3333 9.18849 28.3333 16Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ThreeDotsCircleSize32;
