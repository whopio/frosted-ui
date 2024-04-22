import * as React from 'react';
import { IconProps } from './types';

export const Dna12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.99995 6C4.54169 4.89473 2.25 3.79011 2.25.75M9.74999 11.25C9.74999 9.37413 8.87742 8.23517 7.86652 7.37827M9.375 2.25L2.625 2.25M2.62497 9.75L9.37497 9.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 11.25C3 11.6642 2.66421 12 2.25 12C1.83579 12 1.5 11.6642 1.5 11.25C1.5 8.21771 3.5543 6.79434 4.95228 5.82572C5.16978 5.67502 5.3714 5.53532 5.54692 5.40229C5.78719 5.22017 6.03252 5.04624 6.27605 4.87358C7.66721 3.88727 8.99997 2.94236 8.99997 0.75C8.99997 0.335787 9.33576 0 9.74997 0C10.1642 0 10.5 0.335787 10.5 0.75C10.5 3.78227 8.44564 5.20565 7.04765 6.17427C6.83013 6.32498 6.62851 6.46468 6.45298 6.59772C6.21271 6.77982 5.9674 6.95375 5.72388 7.1264C4.33272 8.11272 3 9.05761 3 11.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Dna12;
