import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.25 1.5C2.73122 1.5 1.5 2.73122 1.5 4.25V11.75C1.5 13.2688 2.73122 14.5 4.25 14.5H11.75C13.2688 14.5 14.5 13.2688 14.5 11.75V4.25C14.5 2.73122 13.2688 1.5 11.75 1.5H4.25ZM0 4.25C0 1.90279 1.90279 0 4.25 0H11.75C14.0972 0 16 1.90279 16 4.25V11.75C16 14.0972 14.0972 16 11.75 16H4.25C1.90279 16 0 14.0972 0 11.75V4.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4 7.25L12 7.25C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75L4 8.75C3.58579 8.75 3.25 8.41421 3.25 8C3.25 7.58579 3.58579 7.25 4 7.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.75 4V12C8.75 12.4142 8.41421 12.75 8 12.75C7.58579 12.75 7.25 12.4142 7.25 12V4C7.25 3.58579 7.58579 3.25 8 3.25C8.41421 3.25 8.75 3.58579 8.75 4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default PlusRectangle16;
