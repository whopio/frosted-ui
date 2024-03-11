import * as React from 'react';
import { IconProps } from './types';

export const Clipboard12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.59139 1.02098C8.31492 0.418456 7.70633 0 7 0H6H5C4.29367 0 3.68508 0.418456 3.40861 1.02098C2.05092 1.18909 1 2.34682 1 3.75V9.25C1 10.7688 2.23122 12 3.75 12H8.25C9.76878 12 11 10.7688 11 9.25V3.75C11 2.34682 9.94908 1.18909 8.59139 1.02098ZM3.75 2.5C3.05964 2.5 2.5 3.05964 2.5 3.75V9.25C2.5 9.94036 3.05964 10.5 3.75 10.5H8.25C8.94036 10.5 9.5 9.94036 9.5 9.25V3.75C9.5 3.05964 8.94036 2.5 8.25 2.5H8H4H3.75ZM4 7.75C4 7.33579 4.33579 7 4.75 7H7.25C7.66421 7 8 7.33579 8 7.75C8 8.16421 7.66421 8.5 7.25 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75ZM4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5H7.25C7.66421 5.5 8 5.16421 8 4.75C8 4.33579 7.66421 4 7.25 4H4.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Clipboard12;
