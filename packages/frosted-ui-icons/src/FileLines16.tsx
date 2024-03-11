import * as React from 'react';
import { IconProps } from './types';

export const FileLines16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2 12V4C2 2.34315 3.34315 1 5 1H7.60951C8.38693 1 9.13401 1.3018 9.69329 1.8418L13.0838 5.11538C13.6693 5.68071 14 6.45968 14 7.27358V12C14 13.6569 12.6569 15 11 15H5C3.34315 15 2 13.6569 2 12Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 2V5C9 5.55228 9.44772 6 10 6H13"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4.625 9.23999H8.625M4.625 12.24H11.625"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default FileLines16;