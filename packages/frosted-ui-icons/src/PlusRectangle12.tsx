import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25 1.5C2.2835 1.5 1.5 2.2835 1.5 3.25V8.75C1.5 9.7165 2.2835 10.5 3.25 10.5H8.75C9.7165 10.5 10.5 9.7165 10.5 8.75V3.25C10.5 2.2835 9.7165 1.5 8.75 1.5H3.25ZM0 3.25C0 1.45507 1.45507 0 3.25 0H8.75C10.5449 0 12 1.45507 12 3.25V8.75C12 10.5449 10.5449 12 8.75 12H3.25C1.45507 12 0 10.5449 0 8.75V3.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6 9.5C5.58579 9.5 5.25 9.16421 5.25 8.75V3.25C5.25 2.83579 5.58579 2.5 6 2.5C6.41421 2.5 6.75 2.83579 6.75 3.25V8.75C6.75 9.16421 6.41421 9.5 6 9.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2.5 6C2.5 5.58579 2.83579 5.25 3.25 5.25H8.75C9.16421 5.25 9.5 5.58579 9.5 6C9.5 6.41421 9.16421 6.75 8.75 6.75H3.25C2.83579 6.75 2.5 6.41421 2.5 6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default PlusRectangle12;
