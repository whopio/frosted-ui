import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.62502 11.0416H3.12502C2.66479 11.0416 2.29169 10.6686 2.29169 10.2083V3.95831C2.29169 3.49806 2.66479 3.12498 3.12502 3.12498H5.62502M5.62502 3.12498V10.8333L8.93402 17.2566C9.07685 17.534 9.36377 17.7083 9.67585 17.7083C10.6987 17.7083 11.484 16.7955 11.3264 15.7849L10.8468 12.7083H15.2158C16.7464 12.7083 17.9176 11.3453 17.6874 9.83223L16.9899 5.2489C16.804 4.02748 15.7539 3.12498 14.5184 3.12498H5.62502Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbDown20;
