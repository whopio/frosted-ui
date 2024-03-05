import * as React from 'react';
import { IconProps } from './types';

export const Sparkles24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 17C8 15.1106 4.8894 12 3 12 4.8894 12 8 9.41571 8 7 8 9.41571 10.5843 12 13 12 10.5843 12 8 15.1106 8 17zM15 10C15 8.86636 13.1336 7 12 7 13.1336 7 15 5.44943 15 4 15 5.44943 16.5506 7 18 7 16.5506 7 15 8.86636 15 10zM15 21C15 19.8664 13.1336 18 12 18 13.1336 18 15 16.4494 15 15 15 16.4494 16.5506 18 18 18 16.5506 18 15 19.8664 15 21z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sparkles24;
