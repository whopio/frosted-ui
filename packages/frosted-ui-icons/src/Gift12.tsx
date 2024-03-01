import * as React from 'react';
import { IconProps } from './types';

export const Gift12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 5.75879H10.25V10.1C10.25 10.7351 9.73513 11.25 9.1 11.25H2.9C2.26487 11.25 1.75 10.7351 1.75 10.1V5.75879zM.75 3.90758C.75 3.55412 1.03654 3.26758 1.39 3.26758H10.61C10.9635 3.26758 11.25 3.55412 11.25 3.90758V5.11879C11.25 5.47225 10.9635 5.75879 10.61 5.75879H1.39C1.03654 5.75879.75 5.47225.75 5.11879V3.90758zM6 3.26758V11.25M6.25704 1.96479C6.39831 1.25844 7.01851.75 7.73885.75H8C8.69036.75 9.25 1.30964 9.25 2V2C9.25 2.69036 8.69036 3.25 8 3.25H6L6.25704 1.96479zM5.74296 1.96479C5.60169 1.25844 4.98149.75 4.26115.75H4C3.30964.75 2.75 1.30964 2.75 2V2C2.75 2.69036 3.30964 3.25 4 3.25H6L5.74296 1.96479z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Gift12;
